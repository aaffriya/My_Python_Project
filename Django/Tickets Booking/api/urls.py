from urllib import request
from . import views
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('', views.index, name='index'),
    path('create', views.create, name='create'),
    path('update/<int:id>', views.update, name='update'),
    path('delete', views.delete, name='delete'),
    path('delete/<int:id>', views.delete, name='delete'),
]