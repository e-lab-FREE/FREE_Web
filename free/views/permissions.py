from rest_framework import permissions
from free.models import Execution, Result

class ApparatusOnlyAccess(permissions.BasePermission):
    message = 'Please provide a valid secret in the Authentication HTTP header.'

    def has_object_permission(self, request, view, obj):
        if 'Authentication' in request.headers:
            #print(obj.apparatus.secret)
            if isinstance(obj, Execution):
                #print(request.headers['Authentication'] == 'Secret ' + obj.apparatus.secret)
                return request.headers['Authentication'] == 'Secret ' + obj.apparatus.secret
            if isinstance(obj, Result):
                return request.headers['Authentication'] == 'Secret ' + obj.execution.apparatus.secret
        return False
        