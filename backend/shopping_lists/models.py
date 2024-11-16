from django.db import models
from django.conf import settings

class ShoppingList(models.Model):
    name = models.CharField(max_length=255)
    items = models.JSONField()  # Przechowywanie listy składników w formacie JSON
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='shopping_lists'
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
