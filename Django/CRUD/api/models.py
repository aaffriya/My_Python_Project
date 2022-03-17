from django.db import models

# Create your models here.

class Employee(models.Model):
    Name = models.CharField(max_length=30)
    Email = models.EmailField()
    City = models.CharField(max_length=20)
    Mobile = models.CharField(max_length=10)

    def __str__(self):
        return self.Name
    