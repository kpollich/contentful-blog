import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <h1>Kyle Pollich</h1>
        </Link>

        <h3>Lancaster, PA Web Developer and Software Engineer</h3>

        <ul className="nav-list">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </header>
    );
  }
}

export default Header;
