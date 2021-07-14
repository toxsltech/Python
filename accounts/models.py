from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from django.db import models
from django.utils import timezone
from project.constants import *
import requests
from hitcount.models import HitCountMixin, HitCount
from django.contrib.contenttypes.fields import GenericRelation
from django.utils.encoding import python_2_unicode_compatible
from newsletter.models import Subscription,Submission,Newsletter
from django.contrib.sites.models import Site 

USER_ROLE = ((1, "Admin"), (2, "Customer"))
GENDER = ((1,"MALE"),(2,"FEMALE"))

alphanumeric = RegexValidator(r'^[a-zA-Z ]*$', 'Only alpha characters are allowed.')
SOCIOTYPE = ((1, "facebook"), (2, "google"))



class User(AbstractUser):
    username = models.CharField(max_length=100, null=True, blank=True, unique=True)
    first_name = models.CharField(max_length=50, null=True, blank=True,validators=[alphanumeric])
    last_name = models.CharField(max_length=50,null=True, blank=True, validators=[alphanumeric])
    email = models.CharField(max_length=100, null=True, blank=True, unique=True)
    email_verifY = models.BooleanField(default=False)
    profile_pic = models.ImageField(upload_to='profile_pic/', blank=True, null=True)
    mobile_no = models.CharField(max_length=100, null=True, blank=True)
    role_id = models.PositiveIntegerField(choices=USER_ROLE, default=1)
    gender = models.PositiveIntegerField(choices=GENDER, default=1)
    social_id = models.CharField(max_length=100,null=True, blank=True, default=10)
    socio_type = models.PositiveIntegerField(null=True, blank=True, default=10, choices=SOCIOTYPE)
    topics = models.ManyToManyField('Topics',null=True, blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        managed = True
        db_table = 'tbl_user'

    def __str__(self):
        if self.email:
            return "{} ({})".format(self.email, self.id)
   

class Topics(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='topics/', blank=True,null=True)
    created_on = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User,on_delete=models.CASCADE,editable=True, related_name ='created_by')
    hit_count_generic = GenericRelation(HitCount, object_id_field='object_pk',
    related_query_name='hit_count_generic_relation')
    
    class Meta:
        managed = True
        db_table = 'tbl_topic'
        verbose_name_plural = "topics"
        
    def save(self,*args,**kwargs):
        if self.name:
            users = User.objects.filter(is_superuser=True)
            if users:
                user = users[0]
                try:
                    letter=Newsletter.objects.get(
                        title = self.name,
                        slug = "-".join(self.name.lower().split(" ")),
                        email = user.email,
                        sender = "{} {}".format(user.first_name,user.last_name)
                    )
                except:
                    letter=Newsletter.objects.create(
                        title = self.name,
                        slug = "-".join(self.name.lower().split(" ")),
                        email = user.email,
                        sender = "{} {}".format(user.first_name,user.last_name)
                    )
                letter.site.add(Site.objects.order_by("id")[0])
                letter.save()
        return super().save(*args,**kwargs)
    

      
    def __str__(self):
        return self.name
