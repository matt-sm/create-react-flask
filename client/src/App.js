import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import LoginContainer from 'components/Login/LoginContainer'
import ProtectedContainer from 'components/Protected/ProtectedContainer'
import HomeContainer from 'components/Home/HomeContainer'
import 'App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={HomeContainer} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/protected" component={ProtectedContainer} />
  </Switch>
)

export default withRouter(App)
