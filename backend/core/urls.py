#new added
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MoodEntryViewSet, test_connection

router = DefaultRouter()
router.register(r'mood-entries', MoodEntryViewSet, basename='moodentry')

urlpatterns = [
    path('test/', test_connection, name='test-connection'),
    path('', include(router.urls)),
]


