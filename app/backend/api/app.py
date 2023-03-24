from flask import Flask, request, jsonify
from flask_restful import Api
from api_handler import *


app = Flask(__name__)
api = Api(app)


@app.route("/")
def index():
    return {
        "message": "Welcome!"
    }
    

@app.route("/api/")
def welcome():
    return {
        'message': "Hello API!"
    }


@app.route("/api/users/")
def users():
    users_list = get_users()
    print(users_list)

    users = []
    for user in users_list:
        users.append({
            "id": user['id'],
            "name": user['name'], 
            "email": user['email'],
            "username": user['username'],
            "phone": user['phone'],
        })

    return jsonify({'users': users})
    

@app.route("/api/users/", methods=['POST'])
def add_users():
    user_id = post_user(data=request.data)
    print(user_id)

    return {
        "message": "User created with success!",
        "user_id": user_id['id']
    }
    

@app.route("/api/users/<string:user_id>/", methods=["GET", "POST", "PATCH", "DELETE"])
def user(user_id: str):
    if request.method == "GET":
        user_obj = get_user(user_id=user_id)
        user = {
            "id": user_obj['id'],
            "name": user_obj['name'], 
            "email": user_obj['email'],
            "username": user_obj['username'],
            "phone": user_obj['phone'],
        }
        return {"user": user}
    elif request.method == "DELETE":
        user = delete_user(user_id=user_id)
        return {"user": user}
    elif request.method == "PATCH":
        user = update_user(user_id=user_id, data=request.data)
        return {"user": user}
    elif request.method == "POST":
        user = post_user(data=request.data)
        return {"user": user}


# Running app
if __name__ == '__main__':
    app.run(debug=True)

