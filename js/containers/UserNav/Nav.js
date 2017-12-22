import React from 'react'
import NavAnonymous from './NavAnonymous'
import NavAuthenticated from './NavAuthenticated'

const Nav = ({ isAuthenticated, onLogout, user }) => {
  if (isAuthenticated) {
    return (
      <NavAuthenticated
        user={user}
        onLogout={onLogout}
      />
    )
  } else {
    return (
      <NavAnonymous />
    )
  }
}

export default Nav