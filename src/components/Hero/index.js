import React, { Component } from 'react'

import IconLinks from '../IconLinks'

class Hero extends Component {
  render() {
    return (
      <div
        className="hero is-fullheight is-fullwidth has-text-centered"
        style={{
          backgroundImage: 'url(/img/firewatch-blue.png)',
          backgroundPositionY: 'center'
        }}
      >
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1" style={{ color: 'white' }}>
              Kyle Pollich
            </h1>
            <h2 className="subtitle" style={{ color: 'white' }}>
              Lancaster, PA Full Stack Developer
            </h2>
            <IconLinks />
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
