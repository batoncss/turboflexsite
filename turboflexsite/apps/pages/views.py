from django.shortcuts import render


def page_home(request):
    return render(request, 'pages/home.html')


def page_find(request):
    return render(request, 'pages/find.html')


def page_camera(request):
    return render(request, 'pages/camera.html')
