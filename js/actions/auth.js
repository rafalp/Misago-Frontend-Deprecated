const logout = () => {
  return () => {
    const decision = window.confirm(gettext('Are you sure you want to log out?'))
    if (decision) {
      document.getElementById('auth-logout').submit()
    }
  }
}

export {
  logout
}