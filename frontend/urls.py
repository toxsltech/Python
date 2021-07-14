from django.conf.urls import url
from django.contrib import admin
from . import views

admin.autodiscover()

app_name = 'frontend'

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^about/$', views.testimonial, name='testimonial'),
    url(r'^faq/$', views.faq, name='faq'),
    url(r'^contact/$', views.contact, name='contact'),
    url(r'^subscribe/$', views.newsletter_subscribe, name='subscribe'),
    url(r'^unsubscribe/$', views.newsletter_unsubscribe, name='unsubscribe'),
    url(r'^latest_ads/(?P<id>[-\w]+)/$', views.latest_ads, name='latest_ads'),
    url(r'^send-topic/(?P<id>[-\w]+)/$', views.sendtopic, name='send_topic'),

]