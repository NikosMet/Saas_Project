from django.urls import path
from . import views
from django.http import HttpResponse

urlpatterns = [
    path('Account',views.AccountView.as_view()),
    path('book',views.BookView.as_view()),
    path('',views.Home,name="home"),
    path('Book/',views.Book,name="Books"),
    path("register", views.register_request, name="register")
]
