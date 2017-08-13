import React, { Component } from 'react'

import './SkillCard.css'

class SkillCard extends Component {
  render() {
    return (
      <div className="skillcard has-text-centered">
        <h1 className="title">
          {this.props.title}
        </h1>

        <ul>
          {this.props.list &&
            this.props.list.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    )
  }
}

export default SkillCard
