from django.shortcuts import render, get_object_or_404, redirect
from django.http import Http404

from .models import ContactMe
from .forms import ContactMeForm

#### CONTACT ME FORM #######
def contact_me_view(request):
    form = ContactMeForm(request.POST or None)
    if form.is_valid():
        form.save()
        form = ContactMeForm()
    context = {
        "form": form
    }
    return render(request, "bundle.js/index.html", context)