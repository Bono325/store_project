from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('store_app.urls')),
    path('', include('frontend.urls')),
]
