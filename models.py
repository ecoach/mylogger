from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class ELog(models.Model):
    who = models.ForeignKey(User, to_field='username', db_column='who') 
    mwhen = models.DateTimeField()
    what = models.CharField(max_length=200)



