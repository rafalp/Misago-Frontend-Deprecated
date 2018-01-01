import React from 'react'
import NavAnonymous from './NavAnonymous'
import NavAuthenticated from './NavAuthenticated'

const Nav = (props) => {
  const {
    isAuthenticated,
    onLogout,
    onOpenSignInForm,
    user
  } = props

  if (isAuthenticated) {
    return (
      <NavAuthenticated
        user={user}
        onLogout={onLogout}
      />
    )
  } else {
    return (
      <NavAnonymous
        onOpenSignInForm={onOpenSignInForm}
      />
    )
  }
}

export default Nav