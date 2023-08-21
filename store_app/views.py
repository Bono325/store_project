# store_app/views.py
from rest_framework import viewsets
from .models import Product, Order
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import ProductSerializer, OrderSerializer

class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
