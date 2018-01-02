import React from 'react'
import ProtectedView from 'components/Protected/ProtectedView'
import LoadingView from 'components/LoadingView'
import ErrorView from 'components/ErrorView'

const ProtectedBranch = ({ loading, data }) => {
  if (loading) {
    return <LoadingView />
  } else if (data) {
    return <ProtectedView {...data} />
  } else {
    return <ErrorView />
  }
}

export default ProtectedBranch
