import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LoginContainer from 'components/Login/LoginContainer'
import ProtectedContainer from 'components/Protected/ProtectedContainer'
import HomeContainer from 'components/Home/HomeContainer'
import 'App.css'

class App extends React.Component {
  render() {
    const { loggedIn } = this.props
  
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {!loggedIn && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            <li>
              <Link to="/protected">Protected</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={HomeContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/protected" component={ProtectedContainer} />
        </div>
      </Router>
    )
  }
}
const mapStateToProps = state => ({
  loggedIn: state.loggedIn
})

export default connect(mapStateToProps)(App)
