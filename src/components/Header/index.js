import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">Kyle Pollich</Link>
        </div>

        <Link className="navbar-item" to="/about">About</Link>
        <Link className="navbar-item" to="/projects">Projects</Link>
        <Link className="navbar-item" to="/blog">Blog</Link>
      </nav>
    )
  }
}

export default Header
