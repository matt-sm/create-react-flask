import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'

import LoginForm from 'components/Login/LoginForm'
import { login, changeForm } from 'actions/appActions'

class LoginContainer extends React.Component {
  render() {
    const { loggedIn, handleSubmit, currentlySending, formState, handleChange } = this.props

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
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  currentlySending: state.currentlySending,
  formState: state.formState
})

const mapDispatchToProps = dispatch => ({
  handleSubmit: (username, password) => dispatch(login(username, password)),
  handleChange: values => dispatch(changeForm(values))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))
