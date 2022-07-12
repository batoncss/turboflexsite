from django.urls import path
from .views import page_home, page_find

urlpatterns = [
    path('', page_home, name='home'),
    path('find/', page_find, name='find')
]
