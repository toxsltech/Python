from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import *
from .forms import *
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth import views as auth_views
from django.contrib.auth.hashers import make_password
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.core.mail import send_mail
import datetime
from django.contrib import messages
from django.contrib.auth import authenticate,login,get_user_model,logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import View,TemplateView
from frontend.views import *
from hitcount.views import HitCountDetailView

User = get_user_model()


class AdminLoginView(TemplateView):
    def get(self, request, *args, **kwargs):
        return redirect('accounts:login')


class LoginView(View):
    def get(self,request,*args,**kwargs):
        return render(request,'registration/login.html')
    
    def post(self,request,*args,**kwargs):
        email = request.POST.get("email")
        password = request.POST.get("password")
        if not email:
            messages.error(request, 'Please enter email.')
            return HttpResponseRedirect(request.META.get("HTTP_REFERER"))
        
        if not password:
            messages.error(request, 'Please type password.')
            return HttpResponseRedirect(request.META.get("HTTP_REFERER"))

        if request.POST.get('remember_me')=='on':    
           request.session.set_expiry(1209600) 
            
        user = authenticate(username=email, password=password)
        if not user:
            messages.error(request, 'Invalid login details.')
            return redirect('accounts:login')
        
        if user.is_superuser and user.role_id == 1:
            login(request, user)
            return redirect('admin:index')
        
        if not user.is_superuser and user.role_id == 2:
            if not user.is_active or not user.email_verifY:
                messages.error(request, 'User is not active please check your email and activate account.')
                return HttpResponseRedirect(request.META.get("HTTP_REFERER"))
            
        login(request, user)
        return redirect('frontend:index')


class LogOutView(View):
    def get(self,request,*args,**kwargs):
        logout(request)
        return redirect('frontend:index')

class SignupView(View):
    def get(self,request,*args,**kwargs):
        return render(request,'registration/signup.html')
    
    def post(self,request,*args,**kwargs):
        email = request.POST.get("email")
        password = request.POST.get("password")
        confirm_password = request.POST.get("confirm-password")
        
        if not email:
            messages.error(request, 'Please enter email.')
            return HttpResponseRedirect(request.META.get("HTTP_REFERER"))
        
        if not password:
            messages.error(request, 'Please type password.')
            return HttpResponseRedirect(request.META.get("HTTP_REFERER"))
        if not confirm_password:
            messages.error(request, 'Please type confirm password.')
            return HttpResponseRedirect(request.META.get("HTTP_REFERER"))
        
        if password != confirm_password:
            messages.error(request, 'Your password and confirm password does not match.')
            return HttpResponseRedirect(request.META.get("HTTP_REFERER"))
        
        if User.objects.filter(email=email):
            messages.error(request, 'User already exist with same email.')
            return HttpResponseRedirect(request.META.get("HTTP_REFERER"))
          
        user = User.objects.create(email=email,username=email)
        user.set_password(password)
        user.role_id = 2
        user.save()
        messages.success(request, 'Signed up successfully.')
        return redirect('accounts:login')

 
class ResetPasswordView(auth_views.PasswordResetView):
    form_class = EmailValidationOnForgotPasswordForm
 

@login_required
def password_reset(request):
    user = User.objects.get(id=request.user.id)
    if request.method == 'POST':
        if request.POST.get('new_password') == request.POST.get('confirm_password'):
            request.user.password = make_password(request.POST.get('new_password'))
            request.user.save()
            new_user = authenticate(password=request.user.password,)
            auth_login(request, new_user, backend='django.contrib.auth.backends.LoginUsingEmailBackend') 
            messages.add_message(request, messages.INFO, 'Password changed successfully') 
        else:
            messages.add_message(request, messages.INFO, 'Password does not match!')
         
        return redirect(request.META.get('HTTP_REFERER'))  

    return render(request, 'registration/signup.html')

def password_reset_complete(request):
    response = auth_views.PasswordResetCompleteView.as_view()(request)
    return response


def password_reset_confirm(request, uidb64=None, token=None):
    response = auth_views.PasswordResetConfirmView.as_view()(request,
                                                             uidb64=uidb64,
                                                             token=token,
                                                             post_reset_redirect="/")

    return response


def password_reset_done(request):
    return render(request,"registration/password_reset_done.html",{})



class EmailVerification(View):
    @csrf_exempt
    def get(self,request,*args,**kwargs):
        user = User.objects.get(id=request.GET.get("id"))
        if user.is_active and user.email_verifY:
            messages.success(request, 'User already active and verify.')
            return redirect('accounts:login')
        
        user.is_active = True
        user.email_verifY = True
        user.save()
        return render(request,'registration/activation.html',context={"text":"Account Successfully activated."})
    
@login_required
def profileview(request):
    
    userinfo = request.user
    if request.method == "POST":
        
        if not(request.user.email == request.POST.get('email')):
            if_user = User.objects.filter(email=request.POST.get("email"))
            if if_user:
                messages.add_message(request, messages.INFO, 'User already exits with same email')
                return redirect('accounts:profile')
            
        if not(request.user.mobile_no == request.POST.get('mobile_no')):
            if_user = User.objects.filter(mobile_no=request.POST.get('mobile_no'))
            if if_user:
                messages.add_message(request, messages.INFO, 'User already exist with same mobile no')
                return redirect('accounts:profile')
            
        userinfo.username = request.POST.get('username')
        userinfo.first_name = request.POST.get('first_name')
        userinfo.last_name = request.POST.get('last_name')
        userinfo.gender = request.POST.get('gender')
        userinfo.mobile_no = request.POST.get('mobile_no')
        
        if request.POST.getlist("topics",None):
            userinfo.topics.clear()
            topics = Topics.objects.filter(id__in=request.POST.getlist("topics"))
            for topic in topics:
                userinfo.topics.add(topic)

        if request.FILES.get('profile_pic',None):
            userinfo.profile_pic = request.FILES.get('profile_pic')
        
        userinfo.save()       
        messages.add_message(request, messages.INFO, 'Profile updated successfully')
        return redirect('accounts:profile')
    else:
        if userinfo.is_superuser:
            return redirect('admin:password_change')
        
        topics = Topics.objects.all()
        ids = ','.join([str(topic.id) for topic in request.user.topics.all()])
        selected_topics = ','.join([topic.name for topic in request.user.topics.all()])
        
    return render(request, 'registration/profile.html', {'userdetail': userinfo,'topics':topics,'ids':ids,'selected_topics':selected_topics})


@login_required
def change_password(request):
    form = ChangePassword()
    user = request.user
    if request.method == 'POST':
        if user.check_password(request.POST.get("currentpassword")) == False:
            messages.error(request, 'Old Password Does not match')
            return redirect('accounts:change_password')
        else:
            newpassword = request.POST.get("newpassword")
            confirmpassword = request.POST.get("confirmpassword")
            if newpassword != confirmpassword:
                messages.error(request, 'Confirm Password Does not match')
                return redirect('accounts:profile')
            else:
                user.set_password(request.POST.get("confirmpassword"))
                user.save()
                messages.add_message(request, messages.INFO, 'Password changed successfully')
                return redirect('accounts:login')
    else:
        return redirect('accounts:profile')
          
