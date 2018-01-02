import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginContainer from 'components/Login/LoginContainer'
import ProtectedContainer from 'components/Protected/ProtectedContainer'
import HomeContainer from 'components/Home/HomeContainer'
import Header from 'components/Header'
import 'App.css'

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={HomeContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/protected" component={ProtectedContainer} />
    </div>
  </Router>
)

export default App
