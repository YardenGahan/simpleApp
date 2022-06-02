from poll.views import PollViewSet
from rest_framework.routers import DefaultRouter
from poll import views

router = DefaultRouter()
router.register(r'poll', views.PollViewSet, basename='poll')
urlpatterns = router.urls