import React from 'react'
import DropdownItem from 'reactstrap/lib/DropdownItem'
import DropdownMenu from 'reactstrap/lib/DropdownMenu'
import DropdownToggle from 'reactstrap/lib/DropdownToggle'
import { UncontrolledDropdown } from 'reactstrap/lib/Uncontrolled'
import Avatar from 'misago/components/Avatar'
import Icon from 'misago/components/Icon'

const NavAuthenticated = ({ onLogout, user }) => {
  return (
    <ul className="navbar-nav ml-auto align-items-center">
      <li className="nav-item">
        <a className="nav-link" href="/">
          <Icon name="search" />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          <Icon name="inbox" />
        </a>
      </li>
      <UncontrolledDropdown nav>
        <DropdownToggle className="nav-link py-0" color="link">
          <Avatar size={32} user={user} />
          <Icon name="more vert" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header>{user.username}</DropdownItem>
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <DropdownItem divider />
          <button
            className="dropdown-item"
            type="button"
            onClick={onLogout}
          >
            {gettext('Log out')}
          </button>
        </DropdownMenu>
      </UncontrolledDropdown>
    </ul>
  )
}

export default NavAuthenticated