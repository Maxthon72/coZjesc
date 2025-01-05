import requests
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

class RecipeSearchView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        api_url = "https://api.spoonacular.com/recipes/complexSearch"

        params = request.query_params.dict()

        params["apiKey"] = settings.SPOONACULAR_API_KEY

        filtered_params = {k: v for k, v in params.items() if v and v != "---"}

        try:
            response = requests.get(api_url, params=filtered_params)
            response.raise_for_status()
            data = response.json()
        except requests.exceptions.RequestException as e:
            return Response({"error": str(e)}, status=500)

        return Response(data, status=200)

class RecipeDetailView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, recipe_id):
        api_url = f"https://api.spoonacular.com/recipes/{recipe_id}/information"

        params = {"apiKey": settings.SPOONACULAR_API_KEY}

        try:
            response = requests.get(api_url, params=params)
            response.raise_for_status()
            data = response.json()
        except requests.exceptions.RequestException as e:
            return Response({"error": str(e)}, status=500)

        return Response(data, status=200)
    
class RandomRecipeView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        api_url = "https://api.spoonacular.com/recipes/random"
        params = {
            "apiKey": settings.SPOONACULAR_API_KEY,
            "number": request.query_params.get("number", 1),
        }
        try:
            response = requests.get(api_url, params=params)
            response.raise_for_status()
            data = response.json()
        except requests.exceptions.RequestException as e:
            return Response({"error": str(e)}, status=500)
        return Response(data, status=200)