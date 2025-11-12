from django.db import models

# -----------------------------
# Testimonial model
# -----------------------------
class Testimonial(models.Model):
    client_name = models.CharField(max_length=100)
    testimonial = models.TextField()
    avatar_url = models.URLField()  # You can store external URLs or relative media paths

    def __str__(self):
        return self.client_name


# -----------------------------
# Contact Message model
# -----------------------------
class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    budget = models.CharField(max_length=50, blank=True)
    message = models.TextField()
    send_copy = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"
