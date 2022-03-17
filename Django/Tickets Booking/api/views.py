from django.http import HttpResponse
from django.shortcuts import redirect, render
from .models import Movies, Theaters, Booked

# Create your views here.


def home(request):
    return render(request, 'index.html')


def book(request):
    context = {
        'movies': Movies.objects.all(),
        'theaters': Theaters.objects.all(),
    }
    print(request)
    return render(request, 'book.html', context)

def success(request):
    movie = Movies.objects.get(id = request.GET['movie_name'])
    theater = Theaters.objects.get(id = request.GET['theater_name'])
    date = request.GET['date']
    data = Booked(Movie=movie, Theater=theater, Time=date)
    data.save()
    context = {
        'movie' : movie,
        'theater' : theater,
        'date' : date,
        'total' : len(Booked.objects.all())
    }

    return render(request, 'success.html', context)
