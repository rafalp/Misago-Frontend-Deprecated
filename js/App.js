import React from 'react'
import Auth from './containers/Auth'
import Navbar from './containers/Navbar'
import router from './router'
import store from './store'

const App = () => {
  // initialize router and store on render!
  return (
    <Auth>
      <div className="container">
        <h1>Hello, this is placeholder for react!</h1>
        <Navbar />
      </div>
    </Auth>
  )
}

export default App
