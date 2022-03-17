import datetime
from django.db import models

# Create your models here.

class Movies(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Theaters(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Booked(models.Model):
    Movie = models.CharField(max_length=100)
    Theater = models.CharField(max_length=100)
    Time = models.DateField(null=True)

    def __str__(self):
        return f"{self.Movie} Booked On {self.Time}"
