from django.urls import path
from .views import page_home, page_find, page_camera
from .api import BatonAPI
urlpatterns = [
    path('', page_home, name='home'),
    path('find/', page_find, name='find'),
    path('camera/', page_camera, name='find'),
    path('baton_api/', BatonAPI.as_view(), name='batonapi')
]
