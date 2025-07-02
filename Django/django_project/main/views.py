from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
import json
from django.views.decorators.csrf import csrf_exempt
from django.views import generic
from django.db import connection

def index(request):
     return render(request, 'html/index.html')
 
class StuffView(generic.TemplateView):
    template_name = 'html/index.html'
    
    def get_context_data(self, **kwargs):
        context_data = super().get_context_data(**kwargs)
        with connection.cursor() as c:
            c.execute(
                '''
                SELECT jsonb_agg(jsonb_build_array(item_name, quantity)) AS j
                    FROM practice
                    
                '''
                
            )
            context_data['stuff'] = c.fetchone()[0]
            return context_data