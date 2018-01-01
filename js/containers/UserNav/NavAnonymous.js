import React from 'react'
import DropdownItem from 'reactstrap/lib/DropdownItem'
import DropdownMenu from 'reactstrap/lib/DropdownMenu'
import DropdownToggle from 'reactstrap/lib/DropdownToggle'
import { UncontrolledDropdown } from 'reactstrap/lib/Uncontrolled'
import Avatar from 'misago/components/Avatar'
import Icon from 'misago/components/Icon'

const NavAuthenticated = ({ onOpenSignInForm }) => {
  return (
    <ul className="navbar-nav ml-auto align-items-center">
      <li className="nav-item">
        <a className="nav-link" href="/">
          <Icon name="search" />
        </a>
      </li>
      <li className="nav-item">
        <button type="button" onClick={onOpenSignInForm}>
          {gettext('Sign in')}
        </button>
      </li>
      <li className="nav-item">
        Register!
      </li>
      <UncontrolledDropdown nav>
        <DropdownToggle className="nav-link py-0" color="link">
          <Avatar size={32} />
          <Icon name="more vert" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header>{gettext('Guest')}</DropdownItem>
          <a className="dropdown-item" href="/">Login</a>
          <a className="dropdown-item" href="/">Register</a>
        </DropdownMenu>
      </UncontrolledDropdown>
    </ul>
  )
}

export default NavAuthenticated