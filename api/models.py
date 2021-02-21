from django.db import models
import datetime


# Create your models here.
class Invoice(models.Model):
    id = models.AutoField(primary_key=True)
    company_name = models.CharField(max_length=30)
    sender_name = models.CharField(max_length=50)
    phone = models.IntegerField(max_length=13)
    email = models.EmailField(max_length=50)
    website = models.CharField(max_length=80)
    sending_date = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField()
    amount = models.CharField(max_length=10)
    send_to = models.CharField(max_length=50)
    reminder_count = models.IntegerField(max_length=2)

    # Auto creating due date
    class Meta:
        ordering = ['due_date']

    def save(self, *args, **kwargs):
        if self.due_date is None:
            self.due_date = self.sending_date.date() + datetime.timedelta(days=7)
        super(Invoice, self).save(*args, **kwargs)

    # def __str__(self):
    #     return self.send_to


class InvoiceDetails(models.Model):
    id = models.AutoField(primary_key=True)
    invoice_id = models.ForeignKey(Invoice, on_delete=models.CASCADE)
    description = models.CharField(max_length=100)
    quantity = models.IntegerField(max_length=2)
    price = models.IntegerField(max_length=10)
    total_amount = models.IntegerField(max_length=10)

    class Meta:
        ordering = ['invoice_id']

    def __int__(self):
        return self.invoice_id
