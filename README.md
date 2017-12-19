# create-react-app + flask_login
An example of flask api integration with CRA.

React structure inspired by [this](http://lucasmreis.github.io/blog/simple-react-patterns/).

Auth managed via [Flask-Login](https://github.com/maxcountryman/flask-login).

## Start the frontend:
```
cd client
nvm use
npm install
npm start
```
## Start the backend:
```
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
python run.py
```
Api calls will be proxied on local to `localhost:5000` through the webpack proxy.
