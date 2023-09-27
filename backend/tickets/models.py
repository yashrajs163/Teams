from django.db import models
from django.contrib.auth.models import User

class Column(models.Model):
    name = models.CharField(max_length=255)
    order = models.PositiveIntegerField()  # This allows you to order the columns on the board

    def __str__(self):
        return self.name

class Ticket(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tickets_created')
    assigned_to = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='tickets_assigned')
    column = models.ForeignKey(Column, on_delete=models.SET_NULL, null=True, blank=True, related_name='tickets')  # This assigns the ticket to a column
    order_in_column = models.PositiveIntegerField(default=0)  # This allows ordering of tickets within a column

    def __str__(self):
        return self.title
