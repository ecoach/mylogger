from django.http import HttpResponse, HttpResponseRedirect
from .models import *

# Create your views here.
def what_log_view(request):
    import datetime
    try:
        rwhat = request.GET['logEvent'] 
    except:
        rwhat = 'null'
    rwho = request.user.username
    rwhen = datetime.datetime.now()

    log = ELog(who=request.user, mwhen=rwhen, what=rwhat)
    log.save()

    return HttpResponse("Event record made.")
 

