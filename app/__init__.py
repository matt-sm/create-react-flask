from flask import Flask
from flask_login import LoginManager
from views import bp
from models import User

app = Flask(__name__)
app.secret_key = 'super secret string'  # Change this!

login_manager = LoginManager()


@login_manager.user_loader
def load_user(user_id):
    user_entry = User.get(user_id)
    return User(*user_entry)


login_manager.init_app(app)
app.register_blueprint(bp, url_prefix='/api')

from app import views # noqa
