# Generated by Django 4.2.5 on 2023-10-04 16:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='rated_books',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='account_rated_books', to='api.feedback'),
        ),
        migrations.AlterField(
            model_name='account',
            name='reviewed_books',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='account_reviewed_books', to='api.feedback'),
        ),
        migrations.AlterField(
            model_name='account',
            name='transaction',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='account', to='api.transaction'),
        ),
        migrations.AlterField(
            model_name='account',
            name='transactions_history',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='account_history', to='api.transaction'),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='books',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.book'),
        ),
    ]
