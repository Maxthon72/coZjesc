from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .serializers import RegistrationSerializer, LoginSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate

User = get_user_model()

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        email = request.data.get("email")
        password = request.data.get("password")

        if not username or not email or not password:
            return Response(
                {"error": "All fields are required"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if User.objects.filter(email=email).exists():
            return Response(
                {"error": "User with this email already exists"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Create the user
        user = User.objects.create_user(username=username, email=email, password=password)
        
        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)

        return Response(
            {
                "message": "User registered successfully",
                "access": access_token,
                "refresh": str(refresh),
            },
            status=status.HTTP_201_CREATED,
        )

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        # Authenticate the user
        user = authenticate(username=username, password=password)

        if user is not None:
            # Generate JWT tokens
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)

            return Response(
                {
                    "access": access_token,
                    "refresh": str(refresh),
                },
                status=status.HTTP_200_OK,
            )
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

from rest_framework.permissions import IsAuthenticated

class CreateStaffUserView(APIView):
    permission_classes = [IsAuthenticated]  # Dostęp tylko dla uwierzytelnionych użytkowników

    def post(self, request):
        # Sprawdź, czy użytkownik jest superuserem
        if not request.user.is_superuser:
            return Response({"error": "Only superusers can create staff users."}, status=status.HTTP_403_FORBIDDEN)

        # Pobierz dane z żądania
        username = request.data.get("username")
        email = request.data.get("email")
        password = request.data.get("password")
        first_name = request.data.get("first_name")
        last_name = request.data.get("last_name")
        if not all([username, email, password, last_name, first_name]):
            return Response({"error": "All fields (username, email, password, first_name, last_name) are required."}, status=status.HTTP_400_BAD_REQUEST)

        # Utwórz nowego użytkownika jako staff
        try:
            new_user = User.objects.create_user(username=username, email=email, password=password, first_name=first_name, last_name=last_name)
            new_user.is_staff = True
            new_user.save()

            return Response({"message": f"Staff user '{username}' created successfully."}, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        
class SuperuserLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')

        # Authenticate user
        user = authenticate(username=username, password=password)

        if user is not None:
            if user.is_superuser:
                # Generate JWT tokens for superuser
                refresh = RefreshToken.for_user(user)
                access_token = str(refresh.access_token)

                return Response(
                    {
                        "access": access_token,
                        "refresh": str(refresh),
                    },
                    status=status.HTTP_200_OK,
                )
            else:
                return Response({'error': 'User is not a superuser'}, status=status.HTTP_403_FORBIDDEN)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
