from django.urls import path
from django.conf.urls import url
from blogapp import views
from .views  import *

app_name = 'blogapp'

urlpatterns = [
    path('post-list', views.post_list, name='post_list'),
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
    path('post/comment/<int:pk>/', views.add_comment_to_post, name='add_comment_to_post'),
    url(r'^category/(?P<id>[-\w]+)/$', views.category_list, name='category_list'),
    url('comment/(?P<id>[-\w]+)/$', views.comments_list, name='comments_list'),



]
