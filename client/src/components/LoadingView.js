import React from 'react'

const LoadingView = props => {
  return props.currentlySending ? <div> Loading... </div> : null
}

export default LoadingView
