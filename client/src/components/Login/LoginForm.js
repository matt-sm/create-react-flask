import React from 'react'

const LoginForm = props => {
  const { formState, handleSubmit, handleChange, currentlySending } = props

  const submitForm = event => {
    event.preventDefault()
    handleSubmit(formState.email, formState.password)
  }

  return (
    <form onSubmit={submitForm}>
      <label>
        Email:
        <input type="text" name="email" value={formState.email} onChange={handleChange} />
      </label>
      <label>
        Name:
        <input type="password" name="password" value={formState.password} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default LoginForm
