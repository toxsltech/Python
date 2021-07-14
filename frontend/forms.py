from django import forms
from .models import *
from newsletter.models import Subscription,Submission,Newsletter
from newsletter.forms import SubscribeRequestForm


class SubscriptionForm(SubscribeRequestForm):
   pass 
   
        
