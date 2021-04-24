from rest_framework import viewsets

from boards.models import Board, Topic
from boards.serializers import BoardSerializer, TopicSerializer


class BoardViewSet(viewsets.ModelViewSet):
    queryset = Board.objects.filter(active=True)
    serializer_class = BoardSerializer


class TopicViewSet(viewsets.ModelViewSet):
    serializer_class = TopicSerializer
    queryset = Topic.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        queryset = queryset.filter(board__id=self.request.query_params.get('id'))
        return queryset

