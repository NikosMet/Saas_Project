from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import  Account
from .models import  Book
from .serializers import AccountSerializer
from .serializers import BookSerializer
from django.shortcuts import  render, redirect
from .forms import NewUserForm
from django.contrib.auth import login
from django.contrib import messages

class AccountView (generics.CreateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

class BookView (generics.CreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

def Home(request):
    return render(request,'home.html')
def Book(request):
    return render(request,'Book.html')
def register_request(request):
	if request.method == "POST":
		form = NewUserForm(request.POST)
		if form.is_valid():
			user = form.save()
			login(request, user)
			messages.success(request, "Registration successful." )
			return redirect("main:homepage")
		messages.error(request, "Unsuccessful registration. Invalid information.")
	form = NewUserForm()
	return render (request=request, template_name="register.html", context={"register_form":form})