import datetime 
from django.contrib import admin, messages
from django.core.files import File
from django.http import HttpResponseRedirect
from django.utils.translation import ugettext_lazy as _
from inline_actions.actions import ViewAction
from inline_actions.admin import InlineActionsModelAdminMixin
from .models import * 
from django.shortcuts import render
from django.db.models import Count
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django.contrib.flatpages.admin import FlatPageAdmin
from django.contrib.flatpages.models import FlatPage
from django.utils.html import format_html
from .forms import *

def get_current_month():
    now = datetime.datetime.now()
    return now.strftime("%m")


def get_current_year():
    now = datetime.datetime.now()
    return now.strftime("%Y")


def get_last_year():
    today = datetime.datetime.now()
    last_year = today.year - 1


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'descriptions','created_on']
    list_filter = ('name',)
    search_fields = ("name",)
    list_per_page = 15

    def save_model(self, request, obj, form, change):
        obj.created_by = request.user
        super().save_model(request, obj, form, change)
        
    def descriptions(self,obj):
        return format_html(obj.description[:100])


class SubCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', "category",'descriptions','created_on']
    list_filter = ('category',)
    search_fields = ("name","descriptions")
    list_per_page = 15

    def save_model(self, request, obj, form, change):
        obj.created_by = request.user
        super().save_model(request, obj, form, change)
        
    def descriptions(self,obj):
        return format_html(obj.description[:100])


class ProductImagesInline(admin.StackedInline):
    model = ProductImages
    extra = 0
    can_delete = False
    fields = ["image"]
    readonly_fields = ('created_by',)
    list_per_page = 15

    def save_model(self, request, obj, form, change):
        obj.created_by = request.user
        super().save_model(request, obj, form, change)
 
    readonly_fields = ('created_by',)
 
 
class ProductsAdmin(admin.ModelAdmin):
    formfield_overrides = {
    models.TextField: {'widget': CKEditorUploadingWidget},
    }
    inlines = [
        ProductImagesInline
    ]
    list_filter=("created_on",)
    list_display = ('name','category','price','created_on','descriptions',)
    list_per_page = 15
    form=ProductForm
    
    def descriptions(self,obj):
        return format_html('<div>{}</div>'.format(obj.description[:150]))
    
    def save_model(self, request, obj, form, change):
        obj.created_by = request.user
        super().save_model(request, obj, form, change)


class ProductImagesAdmin(admin.ModelAdmin):
    list_display = ('product','image','created_by','created_on')

class AnswerAdmin(admin.TabularInline):
    model = Answer
    extra = 4
    list_per_page = 15
        
    def get_extra(self, request, obj=None, **kwargs):
        return 3 if obj else 3 


class QuestionsAdmin(admin.ModelAdmin):
    model = Questions
    inlines = [
        AnswerAdmin
    ]

    list_display =("name","answers")
    list_display =("name","answers","created_by")
    
    def answers(self, obj):
        if obj.answers:
            return ",".join([i.answer for i in obj.answers.all()])
        return "--"
    
    def save_model(self, request, obj, form, change):
        obj.created_by = request.user
        super().save_model(request, obj, form, change)
 
    
class AdsAdmin(admin.ModelAdmin):
    list_filter=("created_on",)
    list_display = ("title","description","created_by")
    list_per_page = 15

    def save_model(self, request, obj, form, change):
        obj.created_by = request.user
        super().save_model(request, obj, form, change)    


class AdsModel(object):    
    class _meta:
        app_label = 'products'
        app_config = "products"
        model_name = 'ads-graph'
        verbose_name_plural = "Total Ads Graphs"
        object_name = 'ObjectName'
       
        swapped = False
        abstract = False


class CustomAdminForm2(admin.ModelAdmin):

    def changelist_view(self, request):

        year = request.GET.get("year", get_current_year())
        last_year = request.GET.get("year", get_last_year())
        last_year_data = Ads.objects.filter(created_on__year=last_year).extra(
            {'year': "Extract(year from created_on)"}).values_list('year').annotate(Count('id')).order_by("year")
        monthwise = Ads.objects.filter(created_on__year=year).extra(
            {'month': "Extract(month from created_on)"}).values_list('month').annotate(Count('id')).order_by("month")
        weekwise = Ads.objects.filter(created_on__year=year).extra(
            {'week': "Extract(week from created_on)"}).values_list('week').annotate(Count('id')).order_by("week")

        Years = []
        Year_Data = []

        for yss in last_year_data:
            Years.append(yss[0])
            Year_Data.append(yss[1])

        key = []
        value = []
        month = []
        total = []

        for i in range(0, len(monthwise)):
            key.append(monthwise[i][0])
        for i in range(0, len(monthwise)):
            value.append(monthwise[i][1])
        j = 0

        for i in range(1, 13):
            if i in key:
                total.append(monthwise[j][1])
                j += 1
            else:
                total.append(0)

        key1 = []
        value1 = []
        week = []
        total1 = []

        for i in range(0, len(weekwise)):
            key1.append(weekwise[i][0])
        for i in range(0, len(weekwise)):
            value1.append(weekwise[i][1])
        j = 0
        for i in range(1, 54):
            week.append(i)
        for i in range(1, 54):
            if i in key1:
                total1.append(weekwise[j][1])
                j += 1
            else:
                total1.append(0)

        return render(request, 'registration/pie_chart.html',
                      {"Month_Data": total, "Years": Years, "Year_Data": Year_Data, "weeks": week,
                       "weeks_data": total1})


class ProductListsModel(object):
    class _meta:
        app_label = 'products'
        app_config = "products"
        model_name = 'product-list-graph'
        verbose_name_plural = "Total Products Graphs"
        object_name = 'ObjectName'

        swapped = False
        abstract = False


class CustomAdminForm3(admin.ModelAdmin):

    def changelist_view(self, request):

        year = request.GET.get("year", get_current_year())
        last_year = request.GET.get("year", get_last_year())
        last_year_data = Product.objects.filter(created_on__year=last_year).extra(
            {'year': "Extract(year from created_on)"}).values_list('year').annotate(Count('id')).order_by("year")
        monthwise = Product.objects.filter(created_on__year=year).extra(
            {'month': "Extract(month from created_on)"}).values_list('month').annotate(Count('id')).order_by("month")
        weekwise = Product.objects.filter(created_on__year=year).extra(
            {'week': "Extract(week from created_on)"}).values_list('week').annotate(Count('id')).order_by("week")

        Years = []
        Year_Data = []

        for yss in last_year_data:
            Years.append(yss[0])
            Year_Data.append(yss[1])

        key = []
        value = []
        month = []
        total = []

        for i in range(0, len(monthwise)):
            key.append(monthwise[i][0])
        for i in range(0, len(monthwise)):
            value.append(monthwise[i][1])
        j = 0

        for i in range(1, 13):
            if i in key:
                total.append(monthwise[j][1])
                j += 1
            else:
                total.append(0)

        key1 = []
        value1 = []
        week = []
        total1 = []

        for i in range(0, len(weekwise)):
            key1.append(weekwise[i][0])
        for i in range(0, len(weekwise)):
            value1.append(weekwise[i][1])
        j = 0
        for i in range(1, 54):
            week.append(i)
        for i in range(1, 54):
            if i in key1:
                total1.append(weekwise[j][1])
                j += 1
            else:
                total1.append(0)

        return render(request, 'registration/pie_chart.html',
                      {"Month_Data": total, "Years": Years, "Year_Data": Year_Data, "weeks": week,
                       "weeks_data": total1})

class FlatPageCustom(FlatPageAdmin):
    list_display = ('title','contents','template_name')
    list_per_page = 15

    formfield_overrides = {
        models.TextField: {'widget': CKEditorUploadingWidget},
    }
    def contents(self,obj):
        return format_html('<div>{}</div>'.format(obj.content[:150]))
    
admin.site.unregister(FlatPage)
admin.site.register(FlatPage, FlatPageCustom)
admin.site.register(Category, CategoryAdmin)
admin.site.register(SubCategory, SubCategoryAdmin)
admin.site.register(Questions, QuestionsAdmin)
admin.site.register(Product, ProductsAdmin)
admin.site.register(ProductImages, ProductImagesAdmin)
admin.site.register([ProductListsModel],CustomAdminForm3)
admin.site.register([AdsModel],CustomAdminForm2)
admin.site.register(Ads, AdsAdmin)

