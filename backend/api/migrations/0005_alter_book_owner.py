# Generated by Django 4.2.5 on 2023-10-17 17:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_book_description_alter_book_synopsis'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='owner',
            field=models.ManyToManyField(null=True, to='api.account'),
        ),
    ]