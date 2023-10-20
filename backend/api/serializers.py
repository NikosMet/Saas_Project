from rest_framework import serializers
from .models import Account
from .models import Book

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields=('__all__')
 
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book

        fields='__all__'
