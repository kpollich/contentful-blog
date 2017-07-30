import React, { Component } from 'react'

import Header from '../Header'

import './Layout.css'

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <div className="container outer">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout
