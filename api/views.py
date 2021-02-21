from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics, viewsets
from rest_framework.response import Response

from .serializer import *
from .models import *


class InvoiceView(generics.ListCreateAPIView):

    def list(self, request):
        invoice = Invoice.objects.all()
        serializer = InvoiceSerializer(invoice, many=True, context={"request": request})
        response_dict = {"error": False, "message": "All Invoice details", "data": serializer.data}
        return Response(response_dict)

    def create(self, request):
        try:
            serializer = InvoiceSerializer(data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            print(serializer.data)
            dict_response = {"error": False, "message": "Invoice Created!"}
        except:
            dict_response = {"error": True, "message": "Oops! error occured!Please Try again"}

        return Response(dict_response)


class InvoiceDetailView(generics.ListAPIView):

    def list(self, request):
        invoice = InvoiceDetails.objects.all()
        serializer = InvoiceDetailsSerializer(invoice, many=True, context={"request": request})
        invoice_data = serializer.data
        invoice_id = invoice_data[0]['invoice_id']

        newinvoice = []
        for invoice in invoice_data:
            invoice_details = Invoice.objects.filter(id=invoice_id)
            invoice_serializer = InvoiceSerializer(invoice_details, many=True)
            invoice['invoice_details'] = invoice_serializer.data
            newinvoice.append(invoice)
        response_dict = {"error": False, "message": "All Invoice details", "data": newinvoice}
        return Response(response_dict)

    def create(self, request):
        try:
            serializer = InvoiceDetailsSerializer(data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False, "message": "Invoice Created!"}
        except:
            dict_response = {"error": True, "message": "Oops! error occured!Please Try again"}

        return Response(dict_response)

