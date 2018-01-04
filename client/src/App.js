import React from 'react'
import { Switch, Route, withRouter, BrowserRouter as Router } from 'react-router-dom'
import LoginContainer from 'components/Login/LoginContainer'
import ProtectedContainer from 'components/Protected/ProtectedContainer'
import HomeContainer from 'components/Home/HomeContainer'
import 'App.css'
import Header from 'components/Header'
import LoadingView from 'components/LoadingView'
import { connect } from 'react-redux'
import { loadMe } from 'actions/appActions'

class App extends React.Component {
  componentDidMount() {
    this.props.loadUser()
  }

  render() {
    const { currentlySendingAuth } = this.props

    return (
      <Router>
        <div>
          {!currentlySendingAuth && (
            <div>
              <Header />
              <Route exact path="/" component={HomeContainer} />
              <Route path="/login" component={LoginContainer} />
              <Route path="/protected" component={ProtectedContainer} />
            </div>
          )}
          <LoadingView currentlySending={currentlySendingAuth} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  currentlySendingAuth: state.currentlySendingAuth
})

const mapDispatchToProps = dispatch => ({
  loadUser: () => dispatch(loadMe())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
