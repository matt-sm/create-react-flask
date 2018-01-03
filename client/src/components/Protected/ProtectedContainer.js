import React from 'react'
import ProtectedView from 'components/Protected/ProtectedView'
import { loadProtectedData } from 'actions/appActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class ProtectedContainer extends React.Component {
  componentWillMount() {
    this.props.loadData()
  }

  render() {
    const { currentlySending, data, errorMessage } = this.props

    return <ProtectedView currentlySending={currentlySending} data={data} errorMessage={errorMessage} />
  }
}

const mapStateToProps = state => ({
  data: state.data.protected,
  currentlySending: state.currentlySending,
  errorMessage: state.errorMessage
})

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(loadProtectedData())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProtectedContainer))
