import React from 'react'
import ErrorView from 'components/ErrorView'
import LoadingView from 'components/LoadingView'

const LoginForm = props => {
  const { formState, handleSubmit, handleChange, errorMessage, currentlySending } = props

  const submitForm = event => {
    event.preventDefault()
    handleSubmit(formState.email, formState.password)
  }

  const changeInput = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    handleChange({ [name]: value })
  }

  return (
    <form onSubmit={submitForm}>
      <label>
        Email:
        <input type="text" name="email" value={formState.email} onChange={changeInput} />
      </label>
      <label>
        Name:
        <input type="password" name="password" value={formState.password} onChange={changeInput} />
      </label>
      <input type="submit" value="Submit" />
      <LoadingView currentlySending={currentlySending} />
      <ErrorView message={errorMessage} />
    </form>
  )
}

export default LoginForm
