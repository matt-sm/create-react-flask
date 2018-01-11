[![Maintainability](https://api.codeclimate.com/v1/badges/2c00592733bb3efc9a3d/maintainability)](https://codeclimate.com/github/matt-sm/create-react-flask/maintainability)

# create-react-app + flask
If you really want to create a client react app with session-based authentication.

It does seem counter-intuative to use a stateful server with a stateless Single Page App, but there may be situations (eg. required to integrate with an existing session-based Api) where you can't use tokens.  

Notes:
* for cookies to work, the Api must be hosted on the same domain as the site. On localhost, Api calls are be proxied to `localhost:5000`.
* with the source of truth being the server, when the app first loads it tries to ping an endpoint to determine if the cookie is still valid, and set the correct `lsLoggedIn` value in state. The front end does not track cookie expiry, etc.
* if `isLoggedIn: true` and the cookie does expire, the server will return a `401` and the app redux state will change to `isLoggedIn: false`

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

## Run prettier:
```
npm run prettier
```
