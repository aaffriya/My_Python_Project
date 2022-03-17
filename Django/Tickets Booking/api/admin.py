from django.contrib import admin
from .models import Booked, Movies, Theaters

# Register your models here.
admin.site.register(Movies)
admin.site.register(Theaters)
admin.site.register(Booked)