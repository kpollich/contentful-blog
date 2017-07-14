import React, { Component } from 'react'

import './SkillCard.css'

class SkillCard extends Component {
  render() {
    return (
      <div className="skillcard">
        <h1 className="title">
          {this.props.title}
        </h1>

        <p>Hello</p>
      </div>
    )
  }
}

export default SkillCard
