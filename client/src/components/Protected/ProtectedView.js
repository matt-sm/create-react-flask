import React from 'react'
import ErrorView from 'components/ErrorView'
import LoadingView from 'components/LoadingView'

const ProtectedView = ({ data, currentlySending, errorMessage }) => (
  <div>
    <h2>This is a protected page!</h2>
    <div>{data}</div>
    <LoadingView currentlySending={currentlySending} />
    <ErrorView message={errorMessage} />
  </div>
)

export default ProtectedView
