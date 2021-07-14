from django import template
from django.contrib.auth import get_user_model
from accounts.models import *
from products.models import *


user = get_user_model()
register = template.Library()


@register.filter(name='totaluser')
def totaluser(key):
    user_count = User.objects.all().exclude(is_superuser=True).count()
    return user_count

@register.filter(name='totalproducts')
def totalproducts(key):
    post_count = Product.objects.all().count()
    return post_count

@register.filter(name='totaltopics')
def totaltopics(key):
    topic_count = Topics.objects.all().count()
    return topic_count

@register.filter(name='topic_list')
def topic_list(key):
    return Topics.objects.all()


@register.filter(name='latest_ads')
def latest_ads(key):
    return Ads.objects.order_by("-id")[:2]

@register.filter(name='feature_products')
def feature_products(key):
    dt=[]
    for product in Product.objects.filter(is_feature=True).order_by("-id"):
        dt.append({
            "product":product,
            "image":product.images.all()[0] if product.images.all() else None 
        })
    return dt
