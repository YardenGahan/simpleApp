from django.db import models


# Create your models here.
class Citizens(models.Model):
    first_name = models.CharField(max_length=80)
    last_name = models.CharField(max_length=80)
    date_field = models.DateField()


class Addresses(models.Model):
    CITY_CHOICES = [
        ('Jerusalem', 'Jerusalem'),
        ('Tel Aviv', 'Tel Aviv'),
        ('Haifa', 'Haifa'),
    ]

    street = models.CharField(max_length=80)
    city = models.CharField(default='Jerusalem', max_length=80, choices=CITY_CHOICES)
    zip = models.CharField(max_length=7)


class ContentInfo(models.Model):
    land_line = models.CharField(max_length=12, blank=True)
    cellular = models.CharField(max_length=13, blank=True)


class HealthInfo(models.Model):
    COVID_CHOICES = [
        ('yes', 'Yes'),
        ('no', 'No'),
    ]

    OTHER_CHOICES = [
        ('Diabetes', 'Diabetes'),
        ('Cardio-Vascular problems', 'Cardio-Vascular problems'),
    ]

    covid = models.CharField(default='No', max_length=3, choices=COVID_CHOICES)
    other = models.CharField(default='None', max_length=80, choices=OTHER_CHOICES)
    other_field = models.TextField()

#####################################################
class Poll(models.Model):
    first_name = models.CharField(max_length=80)
    last_name = models.CharField(max_length=80)
    date_field = models.DateField()
    CITY_CHOICES = [
        ('Jerusalem', 'Jerusalem'),
        ('Tel Aviv', 'Tel Aviv'),
        ('Haifa', 'Haifa'),
    ]
    street = models.CharField(max_length=80)
    city = models.CharField(default='Jerusalem', max_length=80, choices=CITY_CHOICES)
    zip = models.CharField(max_length=7)
    land_line = models.CharField(max_length=12, blank=True)
    cellular = models.CharField(max_length=13, blank=True)
    COVID_CHOICES = [
        ('yes', 'Yes'),
        ('no', 'No'),
    ]
    OTHER_CHOICES = [
        ('Diabetes', 'Diabetes'),
        ('Cardio-Vascular problems', 'Cardio-Vascular problems'),
    ]
    covid = models.CharField(default='No', max_length=3, choices=COVID_CHOICES)
    other = models.CharField(default='None', max_length=80, choices=OTHER_CHOICES)
    other_field = models.TextField()
