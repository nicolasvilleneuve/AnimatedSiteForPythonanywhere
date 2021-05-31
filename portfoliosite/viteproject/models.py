from django.db import models

# Create your models here.

class ContactMe(models.Model):
    id = models.AutoField(primary_key=True)
    full_name = models.CharField(max_length=120)
    email = models.EmailField(max_length=1000)
    message = models.CharField(max_length=2000)
