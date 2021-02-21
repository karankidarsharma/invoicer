from django.urls import include, path
from rest_framework import routers
from .views import *

# router = routers.DefaultRouter()
# router.register('invoices', InvoiceViewSet, basename="invoices")

urlpatterns = [
    path('', InvoiceView.as_view()),
    path('invoice-details', InvoiceDetailView.as_view())

]