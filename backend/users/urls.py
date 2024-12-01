from django.urls import path
from .views import RegisterView, LoginView, CreateStaffUserView,SuperuserLoginView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('create-staff/', CreateStaffUserView.as_view(), name='create-staff'),
    path('superuser-login/', SuperuserLoginView.as_view(), name='superuser-login'),
]