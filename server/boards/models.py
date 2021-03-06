from django.db import models

# Create your models here.
from django.utils.safestring import mark_safe
from django.utils.text import Truncator

from accounts.models import User


class Board(models.Model):
    name = models.CharField(max_length=30, unique=True)
    description = models.CharField(max_length=100)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

    def get_posts_count(self):
        return Post.objects.filter(topic__board=self).count()

    def get_last_post(self):
        return Post.objects.filter(topic__board=self).order_by('-created_at').first()


class Topic(models.Model):
    subject = models.CharField(max_length=255)
    last_updated = models.DateTimeField(auto_now_add=True)
    board = models.ForeignKey(Board, related_name='topics', related_query_name='topics', on_delete=models.CASCADE)
    starter = models.ForeignKey(User, related_name='topics', on_delete=models.CASCADE)
    views = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.subject


class Image(models.Model):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name='photos', related_query_name='photos')
    file_field = models.ImageField(upload_to='static/')


class Post(models.Model):
    message = models.TextField(max_length=4000)
    topic = models.ForeignKey(Topic, related_name='posts', related_query_name='posts', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True)
    created_by = models.ForeignKey(User, related_name='posts',on_delete=models.CASCADE)
    updated_by = models.ForeignKey(User, null=True, related_name='+', on_delete=models.DO_NOTHING)

    def __str__(self):
        truncated_message = Truncator(self.message)
        return truncated_message.chars(30)

#    def get_message_as_markdown(self):
#        return mark_safe(markdown(self.message))


class BoardAction(models.Model):
    actions = (
        (1, 'created'),
        (2, 'updated'),
        (3, 'deleted')
    )
    board = models.ForeignKey(Board, on_delete=models.CASCADE)
    action = models.IntegerField(choices=actions)
