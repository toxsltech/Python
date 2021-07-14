from django.conf import settings
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _
from products.models import *
from accounts.models import *

class Post(models.Model):
    
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='post/')
    status = models.BooleanField(default=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_on = models.DateTimeField(default=timezone.now)
        
    class Meta:
         db_table = 'tbl_blog'
         verbose_name = 'blog'
         verbose_name_plural = 'blog'
    
    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def approved_comments(self):
        return self.comments.filter(approved_comment=True)

    def __str__(self):
        return self.title

class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    post = models.ForeignKey('Post', on_delete=models.CASCADE, related_name='comments')
    user_name = models.CharField(max_length=200)
    description = models.TextField()
    reply = models.ForeignKey('Comment', null=True, related_name='replies', on_delete=models.CASCADE)
    created_on = models.DateTimeField(default=timezone.now)
    created_by = models.ForeignKey(User,on_delete=models.CASCADE)
    status = models.BooleanField(default=0)
    
    class Meta:
        db_table = 'tbl_comment'

    def approve(self):
        self.approved_comment = True
        self.save()

    def __str__(self):
        return self.description
    


