from django.urls import path
from .views import RecipeSearchView,RecipeDetailView,RandomRecipeView

urlpatterns = [
    path('search/', RecipeSearchView.as_view(), name='recipe-search'),
    path('<int:recipe_id>/', RecipeDetailView.as_view(), name='recipe-detail'),
    path('random/', RandomRecipeView.as_view(), name='random-recipe'),
]
