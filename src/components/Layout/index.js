import React, { Component } from "react";

import Header from "../Header";

import "./Layout.css";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />

        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Layout;
