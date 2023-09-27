# from django.contrib import admin
# from .models import Ticket, Column

# @admin.register(Ticket)
# class TicketAdmin(admin.ModelAdmin):
#     list_display = ['title', 'description', 'created_at', 'updated_at', 'assigned_to', 'column']
#     search_fields = ['title', 'description']
#     list_filter = ['column', 'assigned_to']

# @admin.register(Column)
# class ColumnAdmin(admin.ModelAdmin):
#     list_display = ['name', 'position']
#     search_fields = ['name']