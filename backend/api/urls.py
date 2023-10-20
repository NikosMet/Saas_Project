from django.urls import path
from . import views
from django.http import HttpResponse

from rest_framework import routers
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r'main', views.BookView, basename='index')

urlpatterns = [
    path('Account',views.AccountView.as_view()),
    path('book',views.BookView.as_view()),
]
