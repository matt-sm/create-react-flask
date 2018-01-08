import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'

import ErrorView from 'components/ErrorView'
import LoadingView from 'components/LoadingView'
import { logout } from 'actions/appActions'

class LogoutContainer extends React.Component {
  componentWillMount() {
    if (this.props.loggedIn) {
      this.props.handleLogout()
    }
  }

  render() {
    const { loggedIn, currentlySending, errorMessage } = this.props

    return (
      <div>
        {!loggedIn && <Redirect to="/login" />}
        <LoadingView currentlySending={currentlySending} />
        <ErrorView message={errorMessage} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  currentlySending: state.currentlySending,
  errorMessage: state.errorMessage
})

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogoutContainer))
