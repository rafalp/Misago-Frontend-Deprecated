import React from 'react'
import ReactDOM from 'react-dom'

const Navbar = () => {
  return ReactDOM.createPortal(
    <p>lorem!</p>,
    document.getElementById('navbar-root'),
  )
}

export default Navbar
