from django.shortcuts import render
from .models import Poll
from .serializers import PollSerializer
from rest_framework import viewsets

# Create your views here.
class PollViewSet(viewsets.ModelViewSet):
    serializer_class = PollSerializer
    queryset = Poll.objects.all()