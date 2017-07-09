import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isNavMenuOpen: false
    }
  }
  render() {
    const navMenuClassName = this.state.isNavMenuOpen
      ? 'navbar-menu is-active'
      : 'navbar-menu'
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">Kyle Pollich</Link>

          <div
            className="navbar-burger burger"
            onClick={() =>
              this.setState({ isNavMenuOpen: !this.state.isNavMenuOpen })}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navMenu" className={navMenuClassName}>
          <div className="navbar-start">
            <Link className="navbar-item" to="/about">About</Link>
            <Link className="navbar-item" to="/projects">Projects</Link>
            <Link className="navbar-item" to="/blog">Blog</Link>
          </div>

        </div>

      </nav>
    )
  }
}

export default Header
