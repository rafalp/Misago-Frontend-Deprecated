// @flow
import getCSRFToken from 'misago/utils/getCSRFToken'

const login = (credentials: SignInCredentials, user: AuthenticatedUser): any => {
  return (dispatch: Dispatch<*>) => {
    submitAuthLogin(credentials)
  }
}

const submitAuthLogin = (credentials: SignInCredentials) => {
  const form = document.getElementById('auth-login')
  if (!(form instanceof HTMLFormElement)) return

  const csrf = form.querySelector('input[type="hidden"]')
  if (csrf instanceof HTMLInputElement) csrf.value = getCSRFToken() || ''

  const redirectTo = form.querySelector('input[name="redirect_to"]')
  if (redirectTo instanceof HTMLInputElement) redirectTo.value = window.location.pathname

  const username = document.createElement('input')
  username.type = 'text'
  username.name = 'username'
  username.value = credentials.username
  form.appendChild(username)

  const password = document.createElement('input')
  password.type = 'password'
  password.name = 'password'
  password.value = credentials.password
  form.appendChild(password)

  form.submit()
}

const logout = (): any => {
  return () => {
    const decision = window.confirm(gettext('Are you sure you want to log out?'))
    if (!decision) return
    
    const logout = document.getElementById('auth-logout')
    if (logout instanceof HTMLFormElement) logout.submit()
  }
}

export {
  login,
  logout
}