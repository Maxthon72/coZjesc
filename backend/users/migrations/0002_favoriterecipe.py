# Generated by Django 5.1.3 on 2024-12-30 18:08

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='FavoriteRecipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('recipe_id', models.CharField(help_text='ID przepisu z zewnętrznego API', max_length=100)),
                ('added_at', models.DateTimeField(auto_now_add=True, help_text='Data dodania przepisu do ulubionych')),
                ('user', models.ForeignKey(help_text='Użytkownik, który dodał przepis do ulubionych', on_delete=django.db.models.deletion.CASCADE, related_name='favorite_recipes', to='users.customuser')),
            ],
        ),
    ]
