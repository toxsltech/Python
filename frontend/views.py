from django.shortcuts import render, redirect
from django.views.generic.edit import View
from products.models import *
from newsletter.models import Subscription
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
from .models import *
from .forms import *
from accounts.models import *
from django.contrib import messages
from django.http import HttpResponse, HttpResponseRedirect,JsonResponse
from products.models import *
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.core.mail import EmailMultiAlternatives
from newsletter.models import Subscription,Submission,Newsletter
from newsletter.forms import SubscribeRequestForm
from django.contrib.auth.decorators import login_required
from newsletter.views import is_authenticated
import newsletter


def index(request):
    topics = Topics.objects.all().order_by('-created_on')
    bg_image = Background_Image.objects.all().order_by('-created_on')
    topics_grp_list=[]
    start,limit=0,6
    
    while start < limit:
        if topics[start:limit]:
            topics_grp_list.append(topics[start:limit])
        else:
            break    
        start = limit
        limit = limit+limit
        
    featured_products = Product.objects.filter(is_feature=True)
    my_topics=[]
    if not request.user.is_anonymous:
        my_topics = [topic.id for topic in request.user.topics.all()]
    return render(request, "frontend/index.html", {"featured_products":featured_products,'topics_list':topics_grp_list,"my_topics":my_topics,'bg_image':bg_image})

@login_required(login_url='/accounts/login/')
def sendtopic(request,id):
    if request.user.is_anonymous:
        return JsonResponse({"data":"Please login to continue.","status":False})
    
    topic = Topics.objects.get(id=id)
    if topic in request.user.topics.all():
        if Subscription.objects.filter(user=request.user,newsletter__title__in=[topic.name]).count() > 0:
            Subscription.objects.filter(user=request.user,newsletter__title__in=[topic.name]).delete()
        request.user.topics.remove(topic) 
        request.user.save()
        return JsonResponse({"data":"Successfully remove from topic.","status":True})
    request.user.topics.add(topic) 
    request.user.save()
    if Subscription.objects.filter(user=request.user,subscribed=True).count() > 0:
        newsletters = Newsletter.objects.filter(title__in=request.user.topics.all().values_list("name",flat=True))
        for newsletter in newsletters:
            try:
                Subscription.objects.get(user=request.user,newsletter=newsletter)
            except Subscription.DoesNotExist:
                Subscription.objects.create(user=request.user,newsletter=newsletter,subscribed=True)
        msg="."
    else:
        msg="! Also you need to subscribe to receive further notifications. "        
    return JsonResponse({"data":"Successfully added into topic{}".format(msg),"status":True})
       
     
def faq(request):
    faqs = Faq.objects.all()
    return render(request, "frontend/faq.html", {'faqs':faqs})
    
def testimonial(request):
    aboutus = AboutUs.objects.all().first()
    team = OurTeam.objects.all()
    feedback = Testimonial.objects.all()
    return render(request,"flatpages/default.html", {'aboutus':aboutus,
                                                    'team':team,'feedback':feedback})


def contact(request):
    contact = ContactUs.objects.all()
    contactdetail = Contact_Details.objects.all().order_by('-created_on')
    
    if not contactdetail:
        contactdetail = None
    else:
        contactdetail=contactdetail[0]    
    if request.method == 'POST' and request.POST:
        
        if request.user.is_authenticated and ContactUs.objects.filter(email=request.user.email).exists()or ContactUs.objects.filter(email=request.POST['email']).exists():
            messages.add_message(request, messages.INFO,
                                 ' You have already sent an email to admin!') 
         

        else:    
            contact = ContactUs.objects.create(
                full_name = request.POST['full_name'],
                phone_number = request.POST['phone_number'],
                message = request.POST['message'],
            )

            if request.user.is_anonymous == True:
                contact.email = request.POST['email']
                contact.save()
            else:
                contact.created_by = request.user
                contact.email = request.user.email
                contact.save()   

            messages.add_message(request, messages.INFO,
                                     ' Your message has been sent successfully!')
        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
        
    return render(request, "frontend/contact-us.html", {'contact':contact,'contactdetail':contactdetail})


def latest_ads(request,id):
    if not id:
        return redirect('frontend:index')
    ads = Ads.objects.get(id=id)
    return render(request, "ads_details.html", {"ads":ads})

def newsletter_subscribe(request):
    if request.user.is_anonymous:
        return redirect('accounts:login')
    topics_name = list(set([topic.name for topic in request.user.topics.all().order_by("-id")]))
    newsletters = Newsletter.objects.filter(title__in = topics_name)
    if not newsletters:
        messages.add_message(request, messages.INFO,
                                         ' Please select topics to subscribe!')
        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    
    
    for newsletter in newsletters:
        try:
            Subscription.objects.get(user=request.user,newsletter=newsletter)
            messages.add_message(request, messages.INFO,
                                         ' You have already subscribed!')
        except Subscription.DoesNotExist:
            Subscription.objects.create(user=request.user,newsletter=newsletter,subscribed=True)
    messages.add_message(request, messages.INFO,
                                    ' You have successfully subscribed!')
        
    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))

    
def newsletter_unsubscribe(request):
    form = NewsLetterForm(request.POST or None)
    
    if form.is_valid():
        instance = form.save(commit=False)
        if Newsletter.objects.filter(email=instance.email).exists():
           Newsletter.objects.filter(email=instance.email).delete()
           messages.add_message("Your email has been removed")
        else:
           messages.add_message('Sorry! We did not find your email address')
        
        subject = "You have been unsubscribed"
        from_email = settings.EMAIL_HOST_USER
        to_email = [instance.email]
        message = "Sorry to let you go. Let us know if there is an issue"
        
        send_mail(subject=subject,from_email=from_email,recipient_list=to_email,message=message,fail_silently=False)
    
    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    