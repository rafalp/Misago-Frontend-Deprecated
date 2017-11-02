// @flow
import type { ComponentWithDefaultProps, MapStateToProps } from 'react-redux'
import { connect } from 'react-redux'
import Navbar from './Navbar'

const mapStateToProps: MapStateToProps<Object, Object, Object> = (state: Object) => {
  return {
    isAuthenticated: !!state.auth.id,
    user: state.auth
  }
}

const mapDispatchToProps: MapStateToProps<Object, Object, Object> = (state: Object) => {
  return {
    isAuthenticated: !!state.auth.id,
    user: state.auth
  }
}

const ConnectedNavbar: ComponentWithDefaultProps<*, *, Object> = connect(mapStateToProps)(Navbar)

export default ConnectedNavbar
export { mapStateToProps }