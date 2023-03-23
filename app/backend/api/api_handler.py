import requests

# BASE_URL = 'https://fakestoreapi.com/users/'
BASE_URL = 'https://jsonplaceholder.typicode.com/users/' # case fakestore does not work


def get_users():
    return requests.get(url=BASE_URL).json()


def get_user(user_id):
    print(user_id)
    return requests.get(url=f"{BASE_URL}{user_id}").json()


def post_user(data):
    return requests.post(url=BASE_URL, data={data}).json()


def update_user(user_id, data):
    return requests.patch(url=BASE_URL+user_id, data={data}).json()


def delete_user(user_id):
    return requests.delete(url=BASE_URL+user_id).json()

