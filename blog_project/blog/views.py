from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.
from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer
from django.views.decorators.cache import cache_page
from django.views.decorators.cache import cache_control
from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import render
from django.http import HttpResponse
from django.core.cache import cache

def index(request):
    return render(request, 'index.html')



@cache_page(60 * 10)  # کش سرور و مرورگر برای ۱۰ دقیقه
@cache_control(public=True, max_age=600)
def home(request):
    return render(request, 'blog/home.html')

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

def cache_test_view(request):
    cache.set("greeting", "salam!", timeout=30)

    value = cache.get("greeting")

    return HttpResponse(f"Cache value: {value}")