from django.shortcuts import render
from django.http import HttpResponse,JsonResponse,HttpResponseRedirect
# Create your views here.
#views

def view(req):
     if(req.method=='GET'):
        res= HttpResponse('home view')
        res.write('<h1>staff<h1>')
        res['content-type']='text/plain'
        res.set_cookie('id',1)
        return res


def insert(req):
    return JsonResponse({'id':1,'name':'insert'})
def update(req):
    return JsonResponse({'id':1,'name':'update'})

def delete(req):
    return HttpResponseRedirect('/staff')