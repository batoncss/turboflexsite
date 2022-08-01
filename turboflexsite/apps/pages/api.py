from rest_framework.decorators import APIView
from rest_framework.response import Response


class BatonAPI(APIView):
    def post(self, request):
        data = "У наживки все получилось. Спасибо!"
        return Response(data, status=200)
