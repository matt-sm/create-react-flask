import React from 'react'
import { connect } from 'react-redux'
import { changeForm } from 'actions/appActions'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.changeInput = this.changeInput.bind(this)
  }

  changeInput(event) {
    const value = event.target.value
    const name = event.target.name

    this.props.handleChange({ [name]: value })
  }

  render() {
    const { label, type, name, model, formState } = this.props

    return (
      <label>
        {label}
        <input type={type} name={name} value={formState[model]} onChange={this.changeInput} />
      </label>
    )
  }
}

const mapStateToProps = state => ({
  formState: state.formState
})

const mapDispatchToProps = dispatch => ({
  handleChange: values => dispatch(changeForm(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(Input)
