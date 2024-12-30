from rest_framework import viewsets, permissions
from .models import FavoriteRecipe
from .serializers import FavoriteRecipeSerializer

class FavoriteRecipeViewSet(viewsets.ModelViewSet):

    queryset = FavoriteRecipe.objects.all()
    serializer_class = FavoriteRecipeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Filter recipes for the currently logged-in user
        return FavoriteRecipe.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Automatically associate the favorite recipe with the logged-in user
        serializer.save(user=self.request.user)
