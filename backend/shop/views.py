from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializer import ProductSerializer


products = [
    {"id":1, "name":"T-Shirt", "description":"Cotton T-shirt", "price":499},
    {"id":2, "name":"Jeans", "description":"Blue denim jeans", "price":999},
    {"id":3, "name":"Sneakers", "description":"Running shoes", "price":1999},
]

@api_view(['GET'])
def product_list(request):
    return Response(products)

