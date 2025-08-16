from django.urls import path, re_path, include
from rest_framework import routers
from .views import PostViewSet, home, index,cache_test_view

router = routers.DefaultRouter()
router.register(r'posts', PostViewSet, basename='post')

urlpatterns = [
    path('api/', include(router.urls)),    
    path('home/', home, name='home'),  
    path("cache-test/", cache_test_view, name="cache-test"),    
    re_path(r'^.*$', index, name='frontend'),
    
]
