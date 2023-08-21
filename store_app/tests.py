from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import Product
from django.contrib.auth.models import User

class ProductAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_create_product(self):
        data = {
            "name": "Test Products",
            "price": "9.99",
            "category": 1,  # Assuming category with ID 1 exists
            "description": "This is a test product."
        }
        response = self.client.post('/api/products/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Product.objects.count(), 1)
        self.assertEqual(Product.objects.get().name, 'Test Product')

    def test_get_products(self):
        response = self.client.get('/api/products/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # Add more test methods for other endpoints and scenarios4


class AuthenticationAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_register_user(self):
        data = {
            "username": "testuser",
            "email": "test@example.com",
            "password": "testpassword"
        }
        response = self.client.post('/admin/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().username, 'testuser')

    def test_login_user(self):
        user = User.objects.create_user(username="testuser", password="testpassword")
        data = {
            "username": "testuser",
            "password": "testpassword"
        }
        response = self.client.post('/admin/', data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_login_invalid_credentials(self):
        data = {
            "username": "invaliduser",
            "password": "invalidpassword"
        }
        response = self.client.post('/admin/', data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

