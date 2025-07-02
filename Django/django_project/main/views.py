from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from django.http import HttpResponse, QueryDict
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
<<<<<<< HEAD
import json
from django.views.decorators.csrf import csrf_exempt
from django.views import generic
from django.db import connection
=======
from django.db import connection
from django.views import generic
from django.conf import settings

>>>>>>> 305a8b92e414b17fab04b32ef5ae14de15f13c30

 
class StuffView(generic.TemplateView):
<<<<<<< HEAD
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
=======
     template_name = 'html/index.html'
     
     def get_context_data(self, **kwargs):
         context_data = super().get_context_data(**kwargs)
         with connection.cursor() as c:
              c.execute(
                   """
                   SELECT json_agg(json_build_array(stuff_name, quantity)) AS j
                         FROM foxholestorage
                   """
              )
              context_data['stuff'] = c.fetchone()[0]
              return context_data
         
         
     def patch(self, request, *args, **kwargs):
         with connection.cursor() as c:
              c.execute(
                   """
                   SELECT json_agg(json_build_array(stuff_name, quantity)) AS j
                         FROM foxholestorage
                   """
              )
              result = c.fetchone()[0]
              return JsonResponse(result, safe=False)  
         
     def put(self, request, *args, **kwargs):
          with connection.cursor() as c:
               c.execute("SELECT stuff_manage('{}'::jsonb)".format(QueryDict(request.body).get('json')))
               return JsonResponse(c.fetchone()[0], safe=False)
>>>>>>> 305a8b92e414b17fab04b32ef5ae14de15f13c30
