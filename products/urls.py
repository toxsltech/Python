from django.urls import path
from . import views

app_name = 'products'

urlpatterns = [
    path('product-list/', views.product_list, name='product_list'),
    path('product/<int:pk>/', views.product_detail, name='product_detail'),
    path('questions/', views.question_views, name='question_views'),
    path('keywords_name/', views.keywords_name, name='keywords_name'),
    path('product_subcategories/<int:id>/', views.subcategories, name='product_subcategories'),
    path('answers/', views.answers, name='answers'),
]