from django import forms
from .models import *


class ProductForm(forms.ModelForm):
    class Media:
        js=("https://code.jquery.com/jquery-3.5.1.js",'assets/js/products.js')
    class Meta:
        model=Product
        fields="__all__"
