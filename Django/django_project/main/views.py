from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
from django.db import connection
from django.views import generic
from django.conf import settings

def index(request):
     return render(request, 'html/index.html')
 
class StuffView(generic.TemplateView):
    template_name = 'html/index.html'
    
    def get_context_data(self, **kwargs):
        context_data = super().get_context_data(**kwargs)
        print("1. Reached get_context_data")  # Debug point 1
        
        try:
            print("2. Trying database connection")  # Debug point 2
            print(f"3. Using database: {settings.DATABASES['default']['NAME']}")  # Debug point 3
            
            with connection.cursor() as c:
                print("4. Connection established")  # Debug point 4
                
                # Test simple query first
                c.execute("SELECT 1")
                test_result = c.fetchone()
                print(f"5. Test query result: {test_result}")  # Debug point 5
                
                # Now try your actual query
                c.execute("""
                    SELECT json_agg(json_build_array(stuff_name, quantity)) AS j
                    FROM foxholestorage
                """)
                
                result = c.fetchone()
                print(f"6. Query result: {result}")  # Debug point 6
                
                context_data['stuff'] = result[0] if result else []
                print("7. Context data prepared:", context_data)  # Debug point 7
                
        except Exception as e:
            print(f"ERROR: {str(e)}")  # Debug point error
            context_data['stuff'] = []
            # Consider adding error to context for template
            context_data['error'] = str(e)
        
        return context_data
     