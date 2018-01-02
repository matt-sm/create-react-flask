import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'

import LoginForm from 'components/Login/LoginForm'
import { login, changeForm } from 'actions/appActions'

class LoginContainer extends React.Component {
  render() {
    const { loggedIn, handleSubmit, currentlySending, formState, handleChange, errorMessage } = this.props

    return (
      <div>
        {loggedIn ? (
          <Redirect to="/home" />
        ) : (
          <LoginForm
            handleSubmit={handleSubmit}
            currentlySending={currentlySending}
            formState={formState}
            handleChange={handleChange}
            errorMessage={errorMessage}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  currentlySending: state.currentlySending,
  formState: state.formState,
  errorMessage: state.errorMessage
})

const mapDispatchToProps = dispatch => ({
  handleSubmit: (username, password) => dispatch(login(username, password)),
  handleChange: values => dispatch(changeForm(values))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))
