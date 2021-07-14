from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from django.shortcuts import redirect
from .forms import *
from .models import *
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from bs4 import BeautifulSoup
from frontend.models import *

def product_list(request):
    bg_image = Background_Image.objects.all().order_by('-created_on')
    products = Product.objects.all()
    if request.GET.get("keyword",None) and request.GET.get("id",None):
        for id in list(set(request.GET.get("id").split(','))):
            products = products.filter(answer=Answer.objects.get(id=id)).distinct() 
        
    page = request.GET.get('page', 1)
    paginator = Paginator(products, 10)
    try:
        product_list = paginator.page(page)
    except PageNotAnInteger:
        product_list = paginator.page(1)
    except EmptyPage:
        product_list = paginator.page(paginator.num_pages)
    
    
    data=[]   
    for product in product_list:
        imagees = ProductImages.objects.filter(product=product).order_by('id')

        if imagees:
            imagees = imagees[0]
            
        else:
            imagees = None
        
        data.append({
            'product':product,
            'image':imagees
        })
        
    page = request.GET.get('page', 1)
    paginator = Paginator(data, 6)
    try:
        product_list = paginator.page(page)
    except PageNotAnInteger:
        product_list = paginator.page(1)
    except EmptyPage:
        product_list = paginator.page(paginator.num_pages)
    
    return render(request, 'products/products.html', {
        'products': data,
        'product_list':product_list,
        "keywords":request.GET.get("keyword","All products"),
        "counts":len(products),"date":timezone.now().date(),
        'ids':request.GET.get("id"),
        'bg_image':bg_image
    })

def product_detail(request, pk):
    product = get_object_or_404(Product, pk=pk)
    imagees = ProductImages.objects.filter(product=product)
    if imagees:
        imagees = imagees[0]
    else:
        imagees = None
    return render(request, 'products/product-details.html', {'product': product, "imagees":imagees, "product_images":product.images.all() if product else []})


def question_views(request):
    
    dt = []
    answers = Product.objects.filter(
        Q(name__icontains=request.GET.get("search_key"))|
        
        Q(category__name__icontains=request.GET.get("search_key")),
      
    ).values_list("answer",flat=True).distinct()
    questions = Answer.objects.filter(id__in=answers).values_list("question").distinct()
    
    questions = Questions.objects.filter(id__in=questions).distinct()

    for question in questions:
        dt.append({
            "question":question.name,
            "id":question.id,
            "answers":[{"answer":answer.answer,"id":answer.id} for answer in question.answers.all()]
        })
    return JsonResponse({"data":dt,"count":len(dt),"keyword":request.GET.get("search_key")})

def keywords_name(request):
    name = [category.name for category in Category.objects.all()]
    # name.extend([subcategory.name for subcategory in SubCategory.objects.all()])
    name.extend([product.name for product in Product.objects.all()])
    # name.extend([BeautifulSoup(category.description, "html.parser").text for category in Category.objects.all() if category.description])
    # name.extend([BeautifulSoup(category.description, "html.parser").text for category in SubCategory.objects.all() if category.description])
    # name.extend([BeautifulSoup(category.description, "html.parser").text for category in Product.objects.all() if category.description])
    return JsonResponse({"data":name,"count":len(name)})
                

def subcategories(request,id):
    subcategories = SubCategory.objects.filter(category_id=id).values("name","id")
    questions = Questions.objects.filter(category_id=id).values("name","id")
    
    data={
        "sub_category":list(subcategories),
        "question":list(questions)
    }
    return JsonResponse({"data":data})


def answers(request):
    questions = [i.get('answers__answer') for i in Questions.objects.filter(id__in=request.GET.get("ids").split(",")).values("answers__answer")]
    answers = Answer.objects.filter(question_id__in=request.GET.get("ids").split(",")).values("answer","id","question").distinct()
    return JsonResponse({"data":{"answers":list(answers),"answer_list":questions}})

