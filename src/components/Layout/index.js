import React, { Component } from 'react'

import Header from '../Header'

import './Layout.css'

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />

        <section className="section">
          <div className="container">
            {this.props.children}
          </div>
        </section>
      </div>
    )
  }
}

export default Layout
