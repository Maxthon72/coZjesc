from rest_framework import viewsets
from .models import FavoriteRecipe
from .serializers import FavoriteRecipeSerializer

class FavoriteRecipeViewSet(viewsets.ModelViewSet):
    queryset = FavoriteRecipe.objects.all()
    serializer_class = FavoriteRecipeSerializer

    def get_queryset(self):
        # Filter the queryset to only include recipes for the logged-in user
        return FavoriteRecipe.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Automatically associate the recipe with the logged-in user
        serializer.save(user=self.request.user)
