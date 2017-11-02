import React from 'react'
import ReactDOM from 'react-dom'
import Avatar from 'misago/components/Avatar'

const Navbar = ({ isAuthenticated, showLoginModal, user }) => {
  return ReactDOM.createPortal(
    [
      <span className="navbar-text" key="username">
        { isAuthenticated ? user.username : 'Guest' }
      </span>,
      <Avatar key="user-avatar" user={user} />,
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        key="signin"
        type="button"
        onClick={showLoginModal}
      >
        {gettext('Sign in')}
      </button>
    ],
    document.getElementById('navbar-root')
  )
}

export default Navbar