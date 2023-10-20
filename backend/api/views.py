from rest_framework import generics
from rest_framework.response import Response
from .models import Account, Book
from .serializers import AccountSerializer, BookSerializer
from rest_framework import permissions

class AccountView(generics.ListCreateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

def get(self, request):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = AccountSerializer(queryset, many=True)
        return Response(serializer.data)

def post(self, request, *args, **kwargs):
        serializer = AccountSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class BookView(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
def get(self, request):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = BookSerializer(queryset, many=True)
        return Response(serializer.data)
def post(self, request, *args, **kwargs):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
