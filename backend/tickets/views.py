from django.shortcuts import render

from rest_framework import viewsets
from .models import Ticket, Column
from .serializers import TicketSerializer, ColumnSerializer

class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer

class ColumnViewSet(viewsets.ModelViewSet):
    queryset = Column.objects.all()
    serializer_class = ColumnSerializer
