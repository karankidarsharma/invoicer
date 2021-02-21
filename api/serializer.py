from .models import *
from rest_framework import serializers


class InvoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invoice
        fields = "__all__"


class InvoiceDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvoiceDetails
        fields = "__all__"

    # def to_representation(self, instance):
    #     response = super().to_representation(instance)
    #     response['invoice'] = InvoiceSerializer(instance.invoice_id, many=True).data
    #     print("+++++++++++", response)
    #     return response
