import random
import string
import re
import requests
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator
from django.core.validators import RegexValidator
from django.db import models

User = get_user_model()

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    image = models.FileField(null=True,blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User,on_delete=models.CASCADE,editable=False)

    class Meta:
        managed = True
        db_table = 'tbl_category'
        verbose_name_plural = "categories"

    def __str__(self):
        return self.name


class SubCategory(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    image = models.FileField(null=True,blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User,on_delete=models.CASCADE,editable=False)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    
    class Meta:
        managed = True
        db_table = 'tbl_sub_category'
        verbose_name_plural = "subcategories"

    def __str__(self):
        return self.name


class Answer(models.Model):
    answer = models.CharField(max_length=100)
    created_on = models.DateTimeField(auto_now_add=True)
    question = models.ForeignKey('Questions', on_delete=models.CASCADE, related_name="answers")
    category = models.ForeignKey(Category,on_delete=models.CASCADE,editable=False)
    created_by = models.ForeignKey(User,on_delete=models.CASCADE,editable=False)
    
    def __str__(self):
        return self.answer
    
    class Meta:
        managed = True
        db_table = 'tbl_answer'
        verbose_name_plural = "answer"
    
    def save(self, *args,**kwargs):
        if self.question:
            self.category = self.question.category
            self.created_by = self.question.created_by  
        super().save(*args,**kwargs) 

class Questions(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    created_by = models.ForeignKey(User,on_delete=models.CASCADE,editable=False)

    class Meta:
        managed = True
        db_table = 'tbl_question'
        verbose_name_plural = "questions"

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True,blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="products", null=True, blank=True)
    subcategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE, related_name="products", null=True, blank=True)
    questions = models.ManyToManyField(Questions, related_name="products")
    answer = models.ManyToManyField(Answer, related_name="products")
    colour = models.CharField(max_length=50, null=True, blank=True)
    size = models.CharField(max_length=50, null=True, blank=True)
    price = models.CharField(max_length=50, null=True, blank=True)
    affilate_link_amazon = models.URLField(null=True, blank=True)
    affilate_link_flipkart = models.URLField(null=True, blank=True)
    affilate_link_ebay = models.URLField(null=True, blank=True)
    rating = models.FloatField(default=0.0)
    specification_1 = models.TextField(null=True,blank=True)
    specification_2 = models.TextField(null=True,blank=True)
    specification_3 = models.TextField(null=True,blank=True)
    specification_4 = models.TextField(null=True,blank=True)
    specification_5 = models.TextField(null=True,blank=True)
    condition =  models.CharField(max_length=255,null=True,blank=True)
    brand =  models.CharField(max_length=255,null=True,blank=True)
    is_feature = models.BooleanField(default=False)
    created_on = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, related_name="products", on_delete=models.CASCADE, null=True, blank=True)
    
    class Meta:
        managed = True
        db_table = 'tbl_product'
        verbose_name_plural = "product"

    def __str__(self):
        return self.name if self.name else ''


    def clean(self):
        if not self.name:
            raise ValidationError("Please add name of product.")
        if not self.category:
            raise ValidationError("Please select a category.")
        if not self.subcategory:
            raise ValidationError("Please select a subcategory.")
        if self.price == 0 or not self.price:
            raise ValidationError("Please provide price of product.")
    
                
class ProductImages(models.Model):
    image = models.FileField(upload_to="product", null=True, blank=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="images")
    created_by = models.ForeignKey(User, related_name="product_images", on_delete=models.CASCADE, null=True, blank=True)
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = True
        db_table = 'tbl_product_image'
        verbose_name_plural = "product images"

    def save(self, *args,**kwargs):
        if self.product:
            self.created_by = self.product.created_by  
        super().save(*args,**kwargs) 
        

class Ads(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(null=True,blank=True)
    price = models.PositiveIntegerField(default=0)
    image = models.FileField(upload_to="ads", null=True, blank=True)
    created_by = models.ForeignKey(User, related_name="ads", on_delete=models.CASCADE,default=1)
    created_on = models.DateTimeField(auto_now_add=True)    
    
    class Meta:
        managed = True
        db_table = 'tbl_ads'
        verbose_name_plural = "ads"
    