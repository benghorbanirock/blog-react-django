from django.core.cache import cache
from django.db.models.signals import post_save, post_delete
from .models import Post

def post_changed(sender, instance, **kwargs):
    cache.delete('all_posts')

post_save.connect(post_changed, sender=Post)
post_delete.connect(post_changed, sender=Post)
