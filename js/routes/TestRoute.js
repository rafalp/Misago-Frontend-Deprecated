import React from 'react'

const TestRoute = ({ match }) => {
  return (
    <div className="container">
      <h1>{match.path}</h1>
      <p className="lead">This is test route.</p>
    </div>
  )
}

export default TestRoute
