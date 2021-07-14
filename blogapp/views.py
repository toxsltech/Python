from django.shortcuts import render
from django.utils import timezone
from django.shortcuts import render, get_object_or_404
from .forms import PostForm
from django.shortcuts import redirect
from .forms import PostForm, CommentForm
from .models import Post, Comment
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect
from products.models import *
from frontend.models import *
from django.core.paginator import Paginator,PageNotAnInteger,EmptyPage

def post_list(request):
    posts = Post.objects.all().order_by('-created_on')
    bg_image = Background_Image.objects.all().order_by('-created_on')
    page = request.GET.get('page', 1)
    paginator = Paginator(posts, 10)
    try:
        post = paginator.page(page)
    except PageNotAnInteger:
        post = paginator.page(1)
    except EmptyPage:
        post = paginator.page(paginator.num_pages)
        
    return render(request, 'blogapp/blog.html', {'posts': posts,'post':post,"categorie":None,'bg_image':bg_image})
    

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    bg_image = Background_Image.objects.all().order_by('-created_on')
    recentpost = Post.objects.all().order_by('-created_on')
    if not recentpost:
        recentpost = None
    else:
        recentpost=recentpost[:3] 

    categories = Category.objects.all()
    comments = Comment.objects.filter(post=post,reply__isnull=True).order_by("id")
    return render(request, 'blogapp/blog-detail.html', {
        'post': post, 
        'bg_image':bg_image,
        "categories":categories, 
        'recentpost':recentpost, 
        'comments':comments[:5],
        'count_status':True if comments.count() > 6 else None
    })


@login_required(login_url='/accounts/login/')
def add_comment_to_post(request, pk):
    try:
       post = Post.objects.get(pk=pk)
    except Post.DoesNotExist:
        return redirect('blogapp:post_detail',pk)
    
    if request.method == "POST":
        try:
            post_comment = Comment.objects.get(id=request.POST.get('comment',None))
            if post_comment:
                model_instance = Comment()
                model_instance.reply = post_comment
                model_instance.post = post
                model_instance.created_by = request.user
                if 'user_name' in request.POST:
                    model_instance.user_name = request.POST['user_name']
                if 'description' in request.POST:
                    model_instance.description = request.POST['description']
                model_instance.save()
        except Comment.DoesNotExist:
            post_comment = Comment()
            post_comment.post = post
            post_comment.created_by = request.user
            if 'user_name' in request.POST:
                post_comment.user_name = request.POST['user_name']
            if 'description' in request.POST:
                post_comment.description = request.POST['description']
            post_comment.save()
        
        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    
    return redirect('blogapp:post_detail', pk=post.pk)


def comments_list(request,id):
    post = get_object_or_404(Post, id=id)
    recentpost = Post.objects.all().order_by('-created_on')
    if not recentpost:
        recentpost = None
    else:
        recentpost=recentpost[:3] 
    categories = Category.objects.all()
    comments = Comment.objects.filter(post=post,reply__isnull=True)
    comment = Comment.objects.filter(post=post,reply__isnull=True)[:6]
    view_less_comments = Comment.objects.filter(post=post,reply__isnull=True)[:6]
    return render(request, 'blogapp/blog-detail-comments.html',{'post':post,'comments':comments,'comment':comment,'recentpost':recentpost,
                                                       'categories':categories,'view_less_comments':view_less_comments})


def category_list(request, id):
    categorie = Category.objects.get(id=id)
    post = Post.objects.filter(category=categorie)
    page = request.GET.get('page', 1)
    paginator = Paginator(post, 10)
    try:
        post = paginator.page(page)
    except PageNotAnInteger:
        post = paginator.page(1)
    except EmptyPage:
        post = paginator.page(paginator.num_pages)
        
    return render(request, 'blogapp/category-list.html', {'post':post,"categorie":categorie})
