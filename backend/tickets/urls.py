from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TicketViewSet, ColumnViewSet

router = DefaultRouter()
router.register(r'tickets', TicketViewSet)
router.register(r'columns', ColumnViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
