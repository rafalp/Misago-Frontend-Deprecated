import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import UserNav from 'misago/containers/UserNav'
import MainNav from './MainNav'

const Navbar = ({ categories, conf, nav, url }) => {
  return (
    <nav className={classNames('navbar navbar-expand', conf.style.navbar)}>
      <div className="container">
        <Link className="navbar-brand mb-0 h1" to={url.index}>
          <img alt="" className="d-inline-block align-top" height="30" src={url.logo} />
          {' '}
          <span>{conf.forum_branding_text}</span>
        </Link>
        <MainNav nav={nav} />
        <UserNav />
      </div>
    </nav>
  )
}

export default Navbar