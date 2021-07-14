from django.db import models
from accounts.models import * 
from newsletter.models import Subscription,Submission,Newsletter


class ContactUs(models.Model):
    full_name = models.CharField(max_length=500)
    phone_number = models.CharField(max_length=100)
    message = models.TextField(max_length=500)
    email = models.CharField(max_length=100, null=True, blank=True, unique=True)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(null=True,blank=True)
    #created_by = models.ForeignKey(User, on_delete=models.CASCADE,null=True,blank=True)
    
    def __str__(self):
        return str(self.email)
    
    class Meta:
        managed = True
        verbose_name_plural = 'Contact Us'


class Contact_Details(models.Model):
    address = models.CharField(max_length=1000)
    call_us = models.CharField(max_length=100)
    mail_us = models.CharField(max_length=300)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(null=True,blank=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE,null=True,blank=True)
    
    def __str__(self):
        return str(self.created_by)
    
    class Meta:
        managed = True
        verbose_name_plural = 'Contact Details'
        
class AboutUs(models.Model):
    title = models.CharField(max_length=50, blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(null=True,blank=True)
    
    class Meta:
        managed = True
        verbose_name_plural = "About Us"

    def __str__(self):
        return self.title
        
class OurTeam(models.Model):
    name =  models.CharField(max_length=50, blank=True, null=True)
    description = models.CharField(max_length=1000, blank=True, null=True)
    designation = models.CharField(max_length=50, blank=True, null=True)
    image = models.ImageField(upload_to='team/',blank=True,null=True)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(null=True,blank=True)
    
    class Meta:
        managed = True
        verbose_name_plural = "Our Team"

    def __str__(self):
        return self.name
    
class Testimonial(models.Model):
    name =  models.CharField(max_length=50, blank=True, null=True)
    image = models.ImageField(upload_to='testimonial/',blank=True,null=True)
    description = models.CharField(max_length=1000, blank=True, null=True)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(null=True,blank=True)
    
    class Meta:
        managed = True
        verbose_name_plural = "Testimonial"

    def __str__(self):
        return self.name

class Faq(models.Model):
    question = models.CharField(max_length=1000)
    answer = models.TextField(max_length=1000)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(null=True,blank=True)
    
    class Meta:
        managed = True
        verbose_name_plural = "FAQ"

    def __str__(self):
        return self.question
  
  
class Subscription(Subscription):
    topic =  models.ForeignKey(Topics, on_delete=models.CASCADE, null=True, blank=True)
 
    class Meta:
        managed = True
        verbose_name_plural = "Subscription"
 
 
class Background_Image(models.Model):
    image = models.ImageField(upload_to='backgroung_img/',blank=True,null=True)
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = True
        verbose_name_plural = "Background Image"
