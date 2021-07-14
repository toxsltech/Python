import datetime
from django.shortcuts import render
from django.db.models import Count
from django.contrib import admin
from .models import *
from django.contrib.auth.models import Group
from newsletter.models import Newsletter,Submission
from hitcount.models import Hit,BlacklistIP,BlacklistUserAgent
from hitcount.admin import HitAdmin,HitCountAdmin,BlacklistIPAdmin,BlacklistUserAgentAdmin
from newsletter.admin import SubmissionAdmin
from django.http import HttpResponseRedirect
from .forms import SubmissionsAdminForm
from django.template.defaultfilters import truncatechars


def get_current_month():
    now = datetime.datetime.now()
    return now.strftime("%m")


def get_current_year():
    now = datetime.datetime.now()
    return now.strftime("%Y")


def get_last_year():
    today = datetime.datetime.now()
    last_year = today.year - 1

class RegistrationUserModel(object):
    class _meta:
        app_label = 'accounts'
        app_config = "accounts"
        model_name = 'register-user-graph'
        verbose_name_plural = "Total Registered User Graphs"
        object_name = 'ObjectName'

        swapped = False
        abstract = False

class CustomAdminForm2(admin.ModelAdmin):

    def changelist_view(self, request):

        year = request.GET.get("year", get_current_year())
        last_year = request.GET.get("year", get_last_year())
        last_year_data = User.objects.filter(date_joined__year=last_year, is_superuser=False).extra(
            {'year': "Extract(year from date_joined)"}).values_list('year').annotate(Count('id')).order_by("year")
        monthwise = User.objects.filter(date_joined__year=year, is_superuser=False).extra(
            {'month': "Extract(month from date_joined)"}).values_list('month').annotate(Count('id')).order_by("month")
        weekwise = User.objects.filter(date_joined__year=year, is_superuser=False).extra(
            {'week': "Extract(week from date_joined)"}).values_list('week').annotate(Count('id')).order_by("week")

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


class UserAdmin(admin.ModelAdmin):
    list_filter = ('topics',)
    actions = ['send_newsletter']
    list_display = ('email','first_name','is_active','email_verifY','created_on')
    list_per_page = 15
    
    def send_newsletter(self, request, queryset):
        return HttpResponseRedirect("/admin/newsletter/submission/add/?topic={}".format(request.GET.get("topics__id__exact")))
    
    send_newsletter.short_description = 'Send Newsletter'
    
    def get_queryset(self, request):
        qs = User.objects.filter(is_superuser=False)
        return qs

class TopicAdmin(admin.ModelAdmin):
    list_display = ('name','short_description','created_by','created_on')
    list_per_page = 15
    
    def short_description(self,obj):
        return truncatechars(obj.description, 50)
    
    def has_delete_permission(self, request, obj=None):
        if obj:
            Newsletter.objects.filter(title=obj.name).delete()
        return super().has_delete_permission(request, obj)
 
 
class SubmissionsAdmin(SubmissionAdmin):
    form = SubmissionsAdminForm


admin.site.unregister(Hit)
admin.site.unregister(HitCount)
admin.site.unregister(BlacklistIP)
admin.site.unregister(BlacklistUserAgent)
admin.site.unregister(Submission)
admin.site.register(Submission,SubmissionsAdmin)
admin.site.register(User,UserAdmin)
admin.site.register([RegistrationUserModel],CustomAdminForm2)
admin.site.register(Topics, TopicAdmin)
admin.site.unregister(Group)