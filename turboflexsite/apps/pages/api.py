from rest_framework.decorators import APIView
from rest_framework.response import Response
from requests import get

class BatonAPI(APIView):
    def post(self, request):
        data = get(f'http://rosreestr.subnets.ru/?get=num&format=json&num={request.data["name"]}')
        Console.log(data.json())
        if 'error' in data.json():
            data_out = data.json()['error']
        else:
            data_out = data.json()['0']['operator'] + '\n' + data.json()['0']['region']
        return Response(data_out, status=200)
