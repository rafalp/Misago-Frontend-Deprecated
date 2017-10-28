import React from 'react'
import ReactDOM from 'react-dom'
import Store from 'misago/utils'

const Navbar = () => {
  return ReactDOM.createPortal(
    [
      <p>lorem!</p>
    ],
    document.getElementById('navbar-root'),
  )
}

export default Navbar
