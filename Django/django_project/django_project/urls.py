"""
URL configuration for django_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from main import views
from django.urls import path

  
urlpatterns = [
<<<<<<< HEAD
    path("", views.index),
    path('get-json/', views.get_json, name='get_json'),
    path('update-json/', views.update_json, name='update_json'),
]
=======
    path("", views.StuffView.as_view()),
]

>>>>>>> 305a8b92e414b17fab04b32ef5ae14de15f13c30
