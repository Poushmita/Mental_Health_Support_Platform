from django.contrib import admin

# Register your models here.
from .models import MoodEntry

admin.site.register(MoodEntry)
class MoodEntryAdmin(admin.ModelAdmin):
    list_display = ("id", "date", "morning_mood", "afternoon_mood", "evening_mood")

#Superuser credentials
#prachi
#prachishaw04@gmail.com
#pr1chi16