from flask import request, jsonify
from flask.ext.login import login_required, login_user
from app import app, login_manager
from models import User


@login_manager.user_loader
def load_user(user_id):
    user_entry = User.get(user_id)
    return User(*user_entry)


@app.route("/", methods=["GET"])
def index():
    return jsonify(response="Hello World!"), 200


@app.route("/login", methods=["POST"])
def login():
    json_payload = request.get_json()
    user_entry = User.get(json_payload['username'])
    if (user_entry):
        user = User(*user_entry)
        if (user.password == json_payload['password']):  # not for prod
            login_user(user)
            return jsonify({"id": user.id}), 200

    return jsonify(authorization=False), 403


@app.route("/protected", methods=["GET"])
@login_required
def protected():
    return jsonify(response="Hello Protected World!"), 200
