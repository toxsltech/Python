"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from django.conf.urls import *
from django.conf import settings
from accounts.views import AdminLoginView
from django.contrib.flatpages import views

urlpatterns = [
    url(r'^admin/login/', AdminLoginView.as_view()),
    path('admin/', admin.site.urls),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
    url(r'^jet/', include('jet.urls', 'jet')),
    url(r'^jet/dashboard/', include('jet.dashboard.urls', 'jet-dashboard')),
    url(r'^accounts/', include('accounts.urls', 'accounts')),
    url('^accounts/', include('django.contrib.auth.urls')),
    url(r'^', include('frontend.urls')),
    url(r'^accounts/', include('social_django.urls', namespace='social')),
    path('blog/', include('blogapp.urls')),
    path('', include('products.urls')),
    path('hitcount/', include(('hitcount.urls', 'hitcount'), namespace='hitcount')),
    url(r'^newsletter/', include('newsletter.urls')),
        
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# urlpatterns +=static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
urlpatterns+=[path('about/', views.flatpage, {'url': '/about/'}, name='about'),url(r'^', include('django.contrib.flatpages.urls'))]

admin.site.site_header = "Welcome DT Admin"
admin.site.index_title = "DT - Administration"
