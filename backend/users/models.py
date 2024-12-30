from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models
from django.conf import settings

class CustomUser(AbstractUser):
    bio = models.TextField(blank=True, null=True, help_text="Krótki opis użytkownika")
    profile_picture = models.ImageField(
        upload_to='profile_pictures/',
        blank=True,
        null=True,
        help_text="Zdjęcie profilowe użytkownika"
    )
    date_of_birth = models.DateField(blank=True, null=True, help_text="Data urodzenia")
    is_verified = models.BooleanField(default=False, help_text="Czy konto zostało zweryfikowane")

    # Dodaj unikalne related_name, aby uniknąć konfliktów
    groups = models.ManyToManyField(
        Group,
        related_name="customuser_groups",
        blank=True
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="customuser_permissions",
        blank=True
    )

    def __str__(self):
        return self.email if self.email else self.username


class FavoriteRecipe(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="favorite_recipes"
    )
    recipe_id = models.CharField(max_length=100)
    added_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['user', 'recipe_id'], name='unique_user_recipe')
        ]

    def __str__(self):
        return f"{self.user.username} - {self.recipe_id}"
