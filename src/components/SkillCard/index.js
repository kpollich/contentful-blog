import React, { Component } from 'react'

import './SkillCard.css'

class SkillCard extends Component {
  render() {
    return (
      <div className="skillcard">
        <h1 className="title">
          {this.props.title}
        </h1>

        <ul className="is-marginless is-paddingless has-text-centered">
          {this.props.list &&
            this.props.list.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    )
  }
}

export default SkillCard
