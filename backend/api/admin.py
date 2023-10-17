from django.contrib import admin
from .models import Account
from .models import Book
from .models import Transaction
from .models import Feedback

admin.site.register(Account)
admin.site.register(Book)
admin.site.register(Transaction)
admin.site.register(Feedback)
# Register your models here.
