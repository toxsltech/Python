from django.contrib import admin
from django.utils.html import format_html
from .models import *
from django.utils.translation import ugettext_lazy as _
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django.contrib import admin, messages

class PostAdmin(admin.ModelAdmin):
    formfield_overrides = {
    models.TextField: {'widget': CKEditorUploadingWidget},
    }

    list_display = ('name','title','status','created_by','created_on','descriptions')
    list_per_page = 15

    def descriptions(self,obj):
        return format_html('<div>{}</div>'.format(obj.description[:150]))
    
    
class CommentAdmin(admin.ModelAdmin):
    list_display = ('created_by','post','description','created_on')
 
admin.site.register(Post,PostAdmin)   
admin.site.register(Comment,CommentAdmin)
