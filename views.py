# Create your views here.
def Use_View(request):
    import datetime
    # do a little logging...
    try:
        rwhat = request.GET['what'] 
    except:
        rwhat = 'null'
    rwho = request.user.username
    rwhen = datetime.datetime.now()

    log = ELog(who=request.user, mwhen=rwhen, what=rwhat)
    log.save()

    return HttpResponse("Event record made.")
 
def Log_Survey(request, survey_id):
    import datetime
    # do a little logging...
    # rwhat = request.GET['what'] 
    rwhat = survey_id 
    rwho = request.user.username
    rwhen = datetime.datetime.now()

    log = Survey_Log(who=request.user, mwhen=rwhen, survey=rwhat)
    log.save()

def Log_Request(request):
    import datetime
    # do a little logging...
    rwhat = request.path
    rwho = request.user.username
    rwhen = datetime.datetime.now()

    log = ELog(who=request.user, mwhen=rwhen, what=rwhat)
    log.save()       


