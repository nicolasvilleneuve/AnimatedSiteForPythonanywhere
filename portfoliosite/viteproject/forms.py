from django import forms


from .models import ContactMe

class ContactMeForm(forms.ModelForm):
    message = forms.CharField(widget=forms.Textarea(attrs={
        "placeholder": "The description"}))

    class Meta:
        model = ContactMe
        fields = [
            'id',
            'full_name',
            'email',
            'message'
        ]