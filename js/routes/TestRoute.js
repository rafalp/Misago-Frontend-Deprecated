import React from 'react'

const TestRoute = ({ match }) => {
  return (
    <div className="page-test">
      <div className="jumbotron jumbotron-fluid py-3">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb m-0 p-0">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item"><a href="/">Library</a></li>
              <li aria-current="page" className="breadcrumb-item active">Data</li>
            </ol>
          </nav>
          <div className="row">
            <div className="col">
              <h1 className="display-4 my-3">Fluid jumbotron</h1>
            </div>
          </div>
          <ul className="list-inline m-0">
            <li className="list-inline-item">Lorem ipsum</li>
            <li className="list-inline-item">Phasellus iaculis</li>
            <li className="list-inline-item">Nulla volutpat</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <h1>{match.path}</h1>
        <p className="lead">This is test route.</p>
      </div>
    </div>
  )
}

export default TestRoute
