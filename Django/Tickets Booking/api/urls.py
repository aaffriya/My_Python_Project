from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('book/', views.book, name='book'),
    # path('book/<str:query>', views.book, name='book'),
    path('book/success/', views.success, name='success'),
    # path('reg/', views.reg, name='reg'),
    # path('book/<str:q>', views.reg, name='reg'),

]