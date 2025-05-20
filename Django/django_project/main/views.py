from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from django.http import HttpResponse, QueryDict
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
from django.db import connection
from django.views import generic
from django.conf import settings


 
class StuffView(generic.TemplateView):
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
         
         
     def pathc(self, request, *args, **kwargs):
         with connection.cursor() as c:
              c.execute(
                   """
                   SELECT json_agg(json_build_array(stuff_name, quantity)) AS j
                         FROM foxholestorage
                   """
              )
              result = c.fetchone
              return JsonResponse(result, safe=False)  
         
     def put(self, request, *args, **kwargs):
          with connection.cursor() as c:
               c.execute("SELECT stuff_manage('{}'::jsonb)".format(QueryDict(request.body).get('json')))
               return JsonResponse(c.fetchone()[0], safe=False)