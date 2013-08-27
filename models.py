from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class ELog(models.Model):
    who = models.ForeignKey(User, to_field='username', db_column='who') 
    mwhen = models.DateTimeField(auto_now=False,blank=True, null=True)
    url = models.TextField(null=True, blank=True)  
    category = models.TextField(null=True, blank=True) 
    action = models.TextField(null=True, blank=True) 
    label = models.TextField(null=True, blank=True)  
    value = models.IntegerField(null=True, blank=True)  
    json = models.TextField(null=True, blank=True)   # <json for ecoach only>
    


