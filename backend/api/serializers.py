from rest_framework import serializers
from .models import Account
from .models import Book

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account

        fields=('id','user','shopping_cart','transaction','transactions_history','rated_books','reviewed_books','current_cost')
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book

        fields='__all__'
