import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginContainer from 'components/Login/LoginContainer'
import LogoutContainer from 'components/Logout/LogoutContainer'
import ProtectedContainer from 'components/Protected/ProtectedContainer'
import HomeContainer from 'components/Home/HomeContainer'
import Header from 'components/Header'
import LoadingView from 'components/LoadingView'
import { loadMe } from 'actions/appActions'
import 'App.css'

class App extends React.Component {
  componentDidMount() {
    this.props.loadUser()
  }

  render() {
    const { loadingAuth } = this.props

    return (
      <Router>
        <div>
          {!loadingAuth && (
            <div>
              <Header />
              <Route exact path="/" component={HomeContainer} />
              <Route path="/login" component={LoginContainer} />
              <Route path="/logout" component={LogoutContainer} />
              <Route path="/protected" component={ProtectedContainer} />
            </div>
          )}
          <LoadingView currentlySending={loadingAuth} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  loadingAuth: state.loadingAuth
})

const mapDispatchToProps = dispatch => ({
  loadUser: () => dispatch(loadMe())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
