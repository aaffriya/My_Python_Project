from multiprocessing import context
from django.http import HttpResponse
from django.shortcuts import redirect, render
from .models import Employee
# Create your views here.

def index(request):
    res = Employee.objects.all()
    context = {
        'emp' : res
    }
    return render(request, 'index.html',context)

def create(request):
    if request.method == 'POST':
        Name = request.POST['Name']
        Email = request.POST['Email']
        City = request.POST['City']
        Mobile = request.POST['Mobile']
        req = Employee(Name = Name, Email = Email, City = City, Mobile = Mobile)
        req.save()
        return redirect('/')
    elif request.method == 'GET':
        return render(request, 'create.html')
    else:
        return HttpResponse('Invaild Request!!')

def delete(request, id = False):
    if id:
        try:
            data = Employee.objects.get(id=id)
            data.delete()
            return redirect('/')
        except:
            return HttpResponse("Invaild Request")

    res = Employee.objects.all()
    context = {
        'emp' : res
    }
    return render(request, 'delete.html', context)

def update(request, id=False):
    if id and request.method == 'GET':
        res = Employee.objects.get(id=id)
        context = {
            'emp' : res
        }
        return render(request, 'update.html', context)
    elif id and request.method == 'POST':
        Name = request.POST['Name']
        Email = request.POST['Email']
        City = request.POST['City']
        Mobile = request.POST['Mobile']
        req = Employee(id = id, Name = Name, Email = Email, City = City, Mobile = Mobile)
        req.save()
        return redirect('/')
        

