from django.contrib import admin
from .models import *
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django.utils.html import format_html
from django.template.defaultfilters import truncatechars


class ContactUsAdmin(admin.ModelAdmin):
    list_display = ('full_name','phone_number','message','created_on')
    list_per_page = 15

class ContactDetailAdmin(admin.ModelAdmin):
    list_display = ('created_by','address','call_us','mail_us','created_on')
    list_per_page = 15


class OurTeamAdmin(admin.ModelAdmin):
    list_display = ('name','designation','created_on')
    list_per_page = 15

       
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name','short_description','created_on')
    list_per_page = 15
    
    def short_description(self,obj):
        return truncatechars(obj.description, 50)
    
class FaqAdmin(admin.ModelAdmin):
    list_display = ('question','answer','created_on')
    list_per_page = 15


class AboutUsAdmin(admin.ModelAdmin):
    list_display = ('title','contents','created_on')
    list_per_page = 15
    
    formfield_overrides = {
        models.TextField: {'widget': CKEditorUploadingWidget},
    }
    def contents(self,obj):
        return format_html('<div>{}</div>'.format(obj.content[:20]))


admin.site.register(Contact_Details, ContactDetailAdmin)    
admin.site.register(ContactUs, ContactUsAdmin)
admin.site.register(OurTeam,OurTeamAdmin)
admin.site.register(Testimonial, TestimonialAdmin)
admin.site.register(AboutUs, AboutUsAdmin)
# admin.site.register(Subscription)
admin.site.register(Faq,FaqAdmin)
