from django.urls import path
from .views import *
urlpatterns=[
    path('', view),
    path('insert/', insert),
    path('update/', update),
    path('delete/', delete),



]