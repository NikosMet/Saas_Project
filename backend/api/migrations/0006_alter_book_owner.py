# Generated by Django 4.2.5 on 2023-10-17 18:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_book_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='owner',
            field=models.ManyToManyField(blank=True, null=True, to='api.account'),
        ),
    ]
