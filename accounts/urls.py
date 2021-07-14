'''
/**
 *@copyright : ToXSL Technologies Pvt. Ltd. < www.toxsl.com >
 *@author     : Shiv Charan Panjeta < shiv@toxsl.com >
 *
 * All Rights Reserved.
 * Proprietary and confidential :  All information contained herein is, and remains
 * the property of ToXSL Technologies Pvt. Ltd. and its partners.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 *
 */
'''

from django.conf.urls import url, include
from django.contrib.auth import views as auth_views

from django.contrib import admin
from django.urls import reverse_lazy, path
from accounts import views
from .views import *

app_name = 'accounts'

urlpatterns = [
    url(r'^login/$', views.LoginView.as_view(), name='login'),
    url(r'^logout/$', views.LogOutView.as_view(), name='logout'),
    url(r'^signup/$', views.SignupView.as_view(), name='signup'),
    url(r'^password_reset/$', views.ResetPasswordView.as_view(success_url = reverse_lazy('accounts:password_reset_done'),
                                                                   html_email_template_name='registration/password_reset_email.html'), name='password_reset'),
    url(r'^password_reset/done/$', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    url(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        views.password_reset_confirm, name='password_reset_confirm'),
    url(r'^reset/done/$', views.password_reset_complete, name='password_reset_complete'),
    url(r'^activate/$', views.EmailVerification.as_view(), name='activate'),
    url(r'^profile/$', views.profileview, name='profile'),
    url(r'^change_password/$', views.change_password, name='change_password'),

]

