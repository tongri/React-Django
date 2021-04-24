from rest_framework import serializers
import pdb
from accounts.models import User
from django.db.models import Sum, Count
from .models import Board, Topic


class BoardSerializer(serializers.ModelSerializer):
    topics = serializers.SerializerMethodField()
    posts = serializers.SerializerMethodField()

    class Meta:
        model = Board
        exclude = ('active', )

    def get_topics(self, obj):
        return obj.topics.count()

    def get_posts(self, obj):
        return obj.topics.annotate(posts_count=Count('posts'))\
                    .aggregate(posts_amount=Sum('posts_count')).get('posts_amount') or 0


class TopicSerializer(serializers.ModelSerializer):
    starter = serializers.StringRelatedField()

    class Meta:
        model = Topic
        exclude = ('board', )
        read_only_fields = ('starter', )