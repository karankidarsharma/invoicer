from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
def createInvoice(request):
    return HttpResponse(render(request, "frontend/index.html"))
