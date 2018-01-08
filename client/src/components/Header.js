import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    const { loggedIn } = this.props

    return (
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!loggedIn ? (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          )}
          <li>
            <Link to="/protected">Protected</Link>
          </li>
        </ul>

        <hr />
      </header>
    )
  }
}
const mapStateToProps = state => ({
  loggedIn: state.loggedIn
})

export default connect(mapStateToProps)(Header)
