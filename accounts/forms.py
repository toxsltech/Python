from accounts.models import *
import re
from django import forms
from django.contrib.auth.forms import PasswordResetForm
from newsletter.admin_forms import SubmissionAdminForm,Subscription
from django.contrib.auth import get_user_model

users = get_user_model()

alnum_re = re.compile(r"\w+$") 

regex = re.compile('[@_!#$%^&*()<>?/\|}{~:]')

class PasswordResetRequestForm(forms.Form):
    email_or_username = forms.CharField(label=("Email Or Username"), max_length=254)
    
class EmailValidationOnForgotPasswordForm(PasswordResetForm):
    def clean_email(self):
        email = self.cleaned_data['email']
        if not User.objects.filter(email__iexact=email, is_active=True).exists():
            raise forms.ValidationError("There is no user registered with the specified email address!")

        return email       
    
class ProfileUpdateForm(forms.ModelForm):

    class Meta:
        model = User
        fields = ['username', 'email', 'mobile_no','first_name','last_name','profile_pic','social_id']

    def clean_username(self):
        value = self.cleaned_data["username"]
        qs = User.objects.filter(username__iexact=value)
        if not qs.exists():
            return value
        raise forms.ValidationError(
            _("A user is registered with this username."))
        
    def clean_email(self):
        value = self.cleaned_data["email"]
        qs = User.objects.filter(email__iexact=value)
        if not qs.exists():
            return value
        raise forms.ValidationError(
            _("A user is registered with this email address."))
    
    def clean_first_name(self):
        if(regex.search(self.cleaned_data["first_name"]) != None):
            raise forms.ValidationError(
                _("First Name cannot contain special characters."))
            
        return self.cleaned_data

    def clean_last_name(self):
        if(regex.search(self.cleaned_data["last_name"]) != None):
            raise forms.ValidationError(
                _("Last Name cannot contain special characters."))
            
        return self.cleaned_data
    

class ChangePassword(forms.Form):
    old_paasword=forms.CharField(widget=forms.PasswordInput())
    password=forms.CharField(widget=forms.PasswordInput())
    confirm_password=forms.CharField(widget=forms.PasswordInput())
    
    def clean_email(self):
        value = self.cleaned_data["email"]
        qs = User.objects.filter(email__iexact=value)
        if not qs:
            raise forms.ValidationError(_("No user found with this email address"))
        return value
    
    def clean(self):
        if len(self.cleaned_data["password"]) < 8:
            raise forms.ValidationError("Password is too short.")
        
        if self.cleaned_data["password"] != self.cleaned_data["confirm_password"]:
            raise forms.ValidationError(_("You must type the same password each time."))
        return self.cleaned_data
    
    
class SubmissionsAdminForm(SubmissionAdminForm):
    def __init__(self,*args,**kwargs):
        ids=None
        if kwargs.get("initial",None):
            ids = kwargs.get("initial",None).get("topic",None)
        super().__init__(*args,**kwargs)
        if ids:
            emails = list(Subscription.objects.filter(user__email__in=users.objects.filter(topics__id__exact=ids).values_list("email",flat=True)).values_list("id",flat=True))
            self.fields["subscriptions"].initial = emails
        
    