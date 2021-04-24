from django.contrib import admin
from django.urls import path, include
from django.conf.urls import  url
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers

from accounts import views as account_views
from boards import views as board_views
from core import views as core_views

router = routers.DefaultRouter()
router.register(r'users', account_views.UserViewSet)
router.register(r'tasks', core_views.TaskViewSet)
router.register(r'boards', board_views.BoardViewSet)
router.register(r'topics', board_views.TopicViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('accounts.urls')),
    path('api/', include(router.urls)),
    path('api/users/me/', account_views.UserViewSet.as_view({'pk': 'me'})),
    url('api/token/verify-token/', account_views.VerifyToken.as_view())
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
