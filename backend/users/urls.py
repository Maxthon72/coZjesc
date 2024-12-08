from django.urls import path
from .views import RegisterView, LoginView, CreateStaffUserView,SuperuserLoginView, CheckIfLogedIn,UserInfoView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('create-staff/', CreateStaffUserView.as_view(), name='create-staff'),
    path('superuser-login/', SuperuserLoginView.as_view(), name='superuser-login'),
    path('check-if-loggedin/', CheckIfLogedIn.as_view(), name='check-if-loggedin'),
    path('user-info/', UserInfoView.as_view(), name='user-info'),
]