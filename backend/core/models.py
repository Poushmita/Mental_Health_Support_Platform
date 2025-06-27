from django.db import models

# Create your models here.
class MoodEntry(models.Model):
    date = models.DateField()
    morning_mood = models.CharField(max_length=10)
    afternoon_mood = models.CharField(max_length=10)
    evening_mood = models.CharField(max_length=10)
    water_intake = models.IntegerField()
    energy_level = models.IntegerField()
    stress_level = models.IntegerField()
    feelings = models.TextField()
    activities = models.TextField()
    needs = models.TextField()
    todo_list = models.TextField()
    reflections = models.TextField()
    notes = models.TextField()

    def __str__(self):
        return f"Mood on {self.date}"

