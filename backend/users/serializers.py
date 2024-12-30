from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import CustomUser, FavoriteRecipe

class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Invalid credentials")

class FavoriteRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteRecipe
        fields = ['id', 'user', 'recipe_id', 'added_at']
        read_only_fields = ['id', 'user', 'added_at']

    def create(self, validated_data):
        user = self.context['request'].user
        recipe_id = validated_data['recipe_id']
        
        # Check if the combination already exists
        if FavoriteRecipe.objects.filter(user=user, recipe_id=recipe_id).exists():
            raise serializers.ValidationError("This recipe is already in your favorites.")
        
        return super().create(validated_data)
