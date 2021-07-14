from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend
from django.db.models import Q
from social_core.backends.facebook import FacebookOAuth2


User = get_user_model()


class EmailBackend(ModelBackend):

    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            user = User.objects.get(Q(email=username)|Q(username=username))
        except User.DoesNotExist:
            return None
 
        if user.check_password(password) and self.user_can_authenticate(user):
                return user

    
class CustomFacebookBackend(FacebookOAuth2):
     
    def get_user_details(self, response):
        """Return user details from Facebook account"""
         
        fullname, first_name, last_name = self.get_user_names(
            response.get('name', ''),
            response.get('first_name', ''),
            response.get('last_name', '')
        )
        user_role_id = UserRoleSession.objects.latest("id")
            
        return {'username': response.get('username', response.get('name')),
                'email': response.get('email', ''),
                'first_name': first_name,
                'last_name': last_name,
                'signup_type':SIGNUP_TYPE_FB
                }
   