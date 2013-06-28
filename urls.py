from django.conf.urls.defaults import patterns, include, url
from .views import *
from django.contrib.auth.decorators import login_required

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',

    # admin
    #url(r'^admin/', include(admin.site.urls)),

    # services
    #url(r'^json_log/', login_required(Json_View), name='json_log'),
    url(r'^', login_required(Use_View), name='data_log'),
)


