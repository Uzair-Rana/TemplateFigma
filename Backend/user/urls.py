from django.urls import path
from .views import TestimonialList, RegisterView, LoginView, ContactMessageView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('testimonials/', TestimonialList.as_view(), name='testimonials'),
    path('contact/', ContactMessageView.as_view(), name='contact'),
]
