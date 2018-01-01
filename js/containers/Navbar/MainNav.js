import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNav = ({ nav }) => {
  return (
    <div className="navbar-nav">
      {nav.map((item) => {
        if (item.isBlank) {
          return (
            <a
              className="nav-item nav-link"
              href={item.url}
              key={item.key}
              target='_blank'
            >
              {item.text}
            </a>
          )
        } else {
          return (
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact={item.exact}
              isActive={item.isActive}
              key={item.key}
              to={item.url}
              strict
            >
              {item.text}
            </NavLink>
          )
        }
      })}
    </div>
  )
}

export default MainNav