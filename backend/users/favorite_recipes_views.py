from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import FavoriteRecipe
from .serializers import FavoriteRecipeSerializer
from django.conf import settings
import requests

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
    
class DeleteFavoriteRecipeView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, recipe_id):
        try:
            # Find the favorite recipe for the logged-in user by recipe_id
            favorite = FavoriteRecipe.objects.get(user=request.user, recipe_id=recipe_id)
            favorite.delete()
            return Response({"detail": "Favorite recipe deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
        except FavoriteRecipe.DoesNotExist:
            return Response({"detail": "Favorite recipe not found."}, status=status.HTTP_404_NOT_FOUND)
        
class FavoriteRecipeDetailsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        favorite_recipes = FavoriteRecipe.objects.filter(user=request.user)

        if not favorite_recipes.exists():
            return Response({"detail": "No favorite recipes found."}, status=200)

        detailed_recipes = []
        for favorite in favorite_recipes:
            recipe_id = favorite.recipe_id
            api_url = f"https://api.spoonacular.com/recipes/{recipe_id}/information"
            params = {"apiKey": settings.SPOONACULAR_API_KEY}

            try:
                response = requests.get(api_url, params=params)
                response.raise_for_status()
                recipe_data = response.json()
                detailed_recipes.append(recipe_data)
            except requests.exceptions.RequestException as e:
                print(f"Failed to fetch recipe details for ID {recipe_id}: {e}")
                continue

        return Response(detailed_recipes, status=200)