from flask import Flask
from flask.ext.login import LoginManager

app = Flask(__name__)
app.secret_key = 'super secret string'  # Change this!

login_manager = LoginManager()
login_manager.init_app(app)

from app import views
