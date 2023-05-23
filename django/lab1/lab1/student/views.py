from django.shortcuts import render
from django.http import HttpResponse,JsonResponse,HttpResponseRedirect
# Create your views here.
#views

def view(req):
     if(req.method=='GET'):
        res= HttpResponse('home view')
        res.write('<h1>Day1<h1>')
        res['content-type']='text/plain'
        res.set_cookie('id',1)
        return res


def insert(req):
    return render(req,'student/insert.html')

def update(req):
    return render(req,'student/update.html')

def delete(req):
    return HttpResponseRedirect('/student')