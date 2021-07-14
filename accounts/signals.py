from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from django.core.mail import send_mail

User = get_user_model()


@receiver(post_save, sender=User)
def on_user_save(sender, instance, created, **kwargs):
    if created:
        try:
            send_mail("Account Activation email", 'Activation link is ',settings.EMAIL_HOST_USER, [instance.email])
        except:
            pass