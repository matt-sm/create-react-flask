import React from 'react'
import ErrorView from 'components/ErrorView'
import LoadingView from 'components/LoadingView'
import Input from 'components/Input'

const LoginForm = props => {
  const { formState, handleSubmit, errorMessage, currentlySending } = props

  const submitForm = event => {
    event.preventDefault()
    handleSubmit(formState.email, formState.password)
  }

  return (
    <form onSubmit={submitForm}>
      <Input type="text" name="email" model="email" label="Email:" />
      <Input type="password" name="password" model="password" label="Password:" />
      <input type="submit" value="Submit" />
      <LoadingView currentlySending={currentlySending} />
      <ErrorView message={errorMessage} />
    </form>
  )
}

export default LoginForm
