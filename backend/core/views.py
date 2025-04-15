from django.shortcuts import render
# new added
from django.http import JsonResponse, HttpResponse
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def signup_view(request):
    username = request.data['username']
    email = request.data['email']
    password = request.data['password']
    
    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'}, status=400)
    
    user = User.objects.create_user(username=username, email=email, password=password)
    return Response({'message': 'User created successfully'})

def test_connection(request):
    return JsonResponse({"message": "Connected to backend and DB successfully!"})

def home(request):
    return HttpResponse("🎉 Hello! This is the Django backend root. Try /admin or /api/signup/")

