import React, { Component } from 'react'

import SkillCard from '../SkillCard'

import './SkillsContainer.css'

class SkillsContainer extends Component {
  render() {
    return (
      <div className="skills-container">
        <h1 className="title is-2 has-text-centered">What I do</h1>

        <div className="columns skillcards-container">
          <div className="column">
            <SkillCard
              title="DevOps"
              list={['AWS', 'Docker', 'Git', 'Solution Architecture']}
            />
          </div>
          <div className="column">
            <SkillCard
              title="Backend"
              list={[
                'Node.js',
                'Ruby on Rails',
                'REST APIs',
                'MySQL + Postgres',
                'Redis'
              ]}
            />
          </div>
          <div className="column">
            <SkillCard
              title="Frontend"
              list={['HTML', 'CSS', 'Javascript', 'React.js']}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SkillsContainer
