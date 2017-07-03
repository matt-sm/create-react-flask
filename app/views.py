from flask import Response
from flask.ext.login import login_required
from app import app, login_manager
from models import User


@login_manager.request_loader
def load_user(request):
    token = request.headers.get('Authorization')
    if token is None:
        token = request.args.get('token')

    if token is not None:
        username, password = token.split(":")  # naive token
        user_entry = User.get(username)
        if (user_entry is not None):
            user = User(user_entry[0], user_entry[1])
            if (user.password == password):
                return user
    return None


@app.route("/", methods=["GET"])
def index():
    return Response(response="Hello World!", status=200)


@app.route("/protected/", methods=["GET"])
@login_required
def protected():
    return Response(response="Hello Protected World!", status=200)
