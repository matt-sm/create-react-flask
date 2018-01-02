import React from 'react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: '', password: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    alert(`${this.state.email}:${this.state.password}`)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Name:
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default LoginForm
