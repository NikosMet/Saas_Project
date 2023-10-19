from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db.models import Avg

class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    shopping_cart = models.ForeignKey('Book', null=True,blank=True, on_delete=models.CASCADE)
    transaction = models.OneToOneField('Transaction', related_name='account', on_delete=models.CASCADE,null=True, blank=True)
    transactions_history = models.ForeignKey('Transaction', related_name='account_history', on_delete=models.CASCADE,null=True, blank=True)
    rated_books = models.ForeignKey('Feedback', related_name='account_rated_books', on_delete=models.CASCADE,null=True, blank=True)
    reviewed_books = models.ForeignKey('Feedback', related_name='account_reviewed_books', on_delete=models.CASCADE,null=True, blank=True)
    current_cost = models.FloatField(default=0.0)
    
    def __str__(self):
        return self.user.username

class Book(models.Model):
    owner = models.ManyToManyField(Account,null=True, blank=True)
    ISBN = models.CharField(max_length=18, default="", unique=True)
    Title = models.CharField(max_length=80, default="", unique=True)
    Authors = models.CharField(max_length=150, default="")
    Publisher = models.CharField(max_length=150, default="")
    Publication_Date = models.CharField(max_length=150, default="")
    Genre = models.CharField(max_length=100, default="")
    Description = models.CharField(max_length=10000, default="")
    Price = models.FloatField()
    Quantity_Stocks = models.CharField(max_length=150, default="")
    Language = models.CharField(max_length=150, default="")
    Reviews = models.ForeignKey('Feedback', on_delete=models.CASCADE, related_name="books",null=True, blank=True)
    Synopsis = models.CharField(max_length=10000, default="")
    Ratings = models.ForeignKey('Feedback', on_delete=models.CASCADE, related_name="books_rated",null=True, blank=True)
    
    def __str__(self):
        return self.Title

class Transaction(models.Model):
    user = models.ForeignKey(Account, on_delete=models.CASCADE, related_name='transactions',null=True, blank=True)
    books = models.ForeignKey(Book, on_delete=models.CASCADE,null=True, blank=True)
    transaction_date = models.DateTimeField(auto_now_add=True,null=True, blank=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2,null=True, blank=True)
    
    def __str__(self):
        return f"Transaction ID: {self.id} by {self.user.user.username} on {self.transaction_date}"


class Feedback(models.Model):
    review = models.CharField(max_length=500, default="",null=True, blank=True)
    rating = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)],null=True, blank=True)
    
    def __str__(self):
        return f"Feedback ID: {self.id}"
# from django.db import models

# from django.contrib.auth.models import User

# from django.core.validators import MaxValueValidator, MinValueValidator

# from django.db.models import Avg

# import math

# class Account(models.Model):

#     user=models.OneToOneField(User,on_delete=models.CASCADE)

#     shopping_cart=models.ForeignKey('Book',blank = True,on_delete=models.CASCADE)

#     transaction = models.OneToOneField('Transaction', related_name='accounts',on_delete=models.CASCADE)

#     transactions_history = models.ForeignKey('Transaction', related_name='accounts',on_delete=models.CASCADE)

#     rated_books = models.ForeignKey('feedback', related_name='accounts',on_delete=models.CASCADE)

#     reviewed_books = models.ForeignKey('feedback',related_name='accounts', on_delete=models.CASCADE)

#     current_cost = float(0)  

#     def __str__(self):
#         return self.name
    


# class Book(models.Model):

#     owner=models.ManyToManyField(Account)

#     ISBN = models.CharField(max_length=18,default="",unique=True)

#     Title =models.CharField(max_length=80,default="",unique=True)

#     Authors = models.CharField(max_length=150,default="",unique=True)

#     Publisher =models.CharField(max_length=150,default="",unique=True)

#     Publication_Date =models.CharField(max_length=150,default="",unique=True)

#     Genre =models.CharField(max_length=100,default="",unique=True)

#     Description =models.CharField(max_length=500,default="",unique=True)

#     Price =float

#     Quantity_Stocks=models.CharField(max_length=150,default="",unique=True)

#     Language=models.CharField(max_length=150,default="",unique=True)

#     Reviews=models.ForeignKey('feedback' , on_delete=models.CASCADE,related_name="books")

#     Synopsis=models.CharField(max_length=500,default="",unique=True)

#     Ratings=models.ForeignKey('feedback' , on_delete=models.CASCADE,related_name="books")

#     def __str__(self):
#         return self.Title
    
#     # def add_to_shopping_cart(self, book):

#     #     self.shopping_cart.add(book)

#     #     self.current_cost.add(book.Price)
#     # def add_to_shopping_cart(self, book):

#     #     self.shopping_cart.add(book)

#     #     self.current_cost.add(book.Price)
#     # def add_to_shopping_cart(self, book):

#     #     self.shopping_cart.add(book)

#     #     self.current_cost.add(book.Price)
#     # def add_to_shopping_cart(self, book):

#     #     self.shopping_cart.add(book)

#     #     self.current_cost.add(book.Price)
#     # def average_rating(self):
#     #     return feedback.objects.filter(book=self).aggregate(Avg('value'))['value__avg']
    
# class Transaction(models.Model):

#     user = models.ForeignKey(Account, on_delete=models.CASCADE)

#     books = models.ForeignKey(Book,on_delete=models.CASCADE)

#     transaction_date = models.DateTimeField(auto_now_add=True)

#     total_amount = models.DecimalField(max_digits=10, decimal_places=2)

#     def __str__(self):

#         return f"Transaction ID: {self.id} by {self.user.username} on {self.transaction_date}"

# class feedback(models.Model):

#     review = models.CharField(max_length=500,default="",unique=True)

#     rating = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
