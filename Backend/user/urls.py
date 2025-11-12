from django.urls import path
from django.contrib import admin
from .views import RegisterView, LoginView
from .views import TestimonialList
from .views import ContactMessageView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('admin/', admin.site.urls),  # optional, only if needed here
    path('testimonials/', TestimonialList.as_view(), name='testimonials'),
    path('contact/', ContactMessageView.as_view(), name='contact'),
]
