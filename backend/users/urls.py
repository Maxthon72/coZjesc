from django.urls import path, include
from .user_views import (
    RegisterView, LoginView, CreateStaffUserView, 
    SuperuserLoginView, CheckIfLogedIn, UserInfoView
)
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.routers import DefaultRouter
from .favorite_recipes_views import FavoriteRecipeViewSet,IsRecipeFavoriteView

router = DefaultRouter()
router.register(r'favorite-recipes', FavoriteRecipeViewSet, basename='favorite-recipe')

urlpatterns = [
    path('favorite-recipes/is-favorite/<str:recipe_id>/', IsRecipeFavoriteView.as_view(), name='is-recipe-favorite'),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('create-staff/', CreateStaffUserView.as_view(), name='create-staff'),
    path('superuser-login/', SuperuserLoginView.as_view(), name='superuser-login'),
    path('check-if-loggedin/', CheckIfLogedIn.as_view(), name='check-if-loggedin'),
    path('user-info/', UserInfoView.as_view(), name='user-info'),
    path('refresh-token/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', include(router.urls)),
]
