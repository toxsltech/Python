from django import forms
from .models import Post, Comment

class PostForm(forms.ModelForm):

    class Meta:
        model = Post
        fields = ('title', 'description', 'image' )
        image = forms.ImageField(label='choose your image')

class CommentForm(forms.ModelForm):

    class Meta:
        model = Comment
        fields = ('description','created_by')