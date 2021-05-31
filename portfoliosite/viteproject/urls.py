from django.urls import path, include

from .views import contact_me_view

urlpatterns = [
    path('', contact_me_view, name="home-contact-me"),
]