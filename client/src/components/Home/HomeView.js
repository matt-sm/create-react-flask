import React from 'react'
import ErrorView from 'components/ErrorView'
import LoadingView from 'components/LoadingView'

const HomeView = ({ data, currentlySending, errorMessage }) => (
  <div>
    <h2>Welcome to this amazing site!</h2>
    <div>{data}</div>
    <LoadingView currentlySending={currentlySending} />
    <ErrorView message={errorMessage} />
  </div>
)

export default HomeView
