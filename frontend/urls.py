from django.urls import path
from . import views

urlpatterns = [
    # ... other paths
    path('', views.index, name='index'),
]
