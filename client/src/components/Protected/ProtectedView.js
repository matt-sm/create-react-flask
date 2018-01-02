import React from 'react'

const ProtectedView = ({ message }) => (
  <div>
    <h2>This is a protected page!</h2>
    <div>{message}</div>
  </div>
)

export default ProtectedView
