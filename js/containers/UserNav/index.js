// @flow
import type { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { logout } from 'misago/actions/auth'
import Nav from './Nav'

const mapStateToProps = (state: Object) => {
  return {
    isAuthenticated: !!state.auth.id,
    user: state.auth
  }
}

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    onLogout: () => { dispatch(logout()) }
  }
}

const ConnectedNavbar = connect(mapStateToProps, mapDispatchToProps)(Nav)

export default ConnectedNavbar
export { mapDispatchToProps, mapStateToProps }