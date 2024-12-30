from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
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
'''
GET	/favorite-recipes/	List all favorite recipes for the logged-in user.
POST	/favorite-recipes/	Add a new favorite recipe.
GET	/favorite-recipes/<id>/	Retrieve a specific favorite recipe.
PUT	/favorite-recipes/<id>/	Update a specific favorite recipe (full update).
PATCH	/favorite-recipes/<id>/	Partially update a favorite recipe (e.g., one field).
DELETE	/favorite-recipes/<id>/	Remove a favorite recipe.
'''

class IsRecipeFavoriteView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, recipe_id):
        is_favorite = FavoriteRecipe.objects.filter(user=request.user, recipe_id=recipe_id).exists()
        return Response({'is_favorite': is_favorite})