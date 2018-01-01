// @flow
import type { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { conf, url } from 'misago/constants'
import mainnav from 'misago/mainnav'
import Navbar from './Navbar'

const mapStateToProps = (state: Object) => {
  return {
    conf: conf,
    nav: mainnav.items(),
    url: url
  }
}

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {}
}

const ConnectedNavbar = connect(mapStateToProps, mapDispatchToProps)(Navbar)
const NavbarWithRouter = withRouter(ConnectedNavbar)

export default NavbarWithRouter