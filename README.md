[![Maintainability](https://api.codeclimate.com/v1/badges/2c00592733bb3efc9a3d/maintainability)](https://codeclimate.com/github/matt-sm/create-react-flask/maintainability)

# create-react-app + flask
An example of a flask api integration with cookie-based authentication and CRA.  

React structure inspired by this [container pattern](http://lucasmreis.github.io/blog/simple-react-patterns/).

Auth managed via [flask-login](https://github.com/maxcountryman/flask-login).

Redux actions/reducers based on [login-flow](https://github.com/mxstbr/login-flow).

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

## Run prettier:
```
npm run prettier
```
