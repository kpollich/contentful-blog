import React, { Component } from 'react'

import Layout from '../Layout'

import './About.css'

class About extends Component {
  render() {
    return (
      <Layout>
        <div className="flex-container-centered">
          <div className="about-container">
            <h1 className="section-title">About</h1>
            <p>
              Hello! My name is Kyle Pollich, and I am a 23 year old software
              engineer located in Lancaster, Pennsylvania. I graduated from
              Millersville University in 2015 with a degree in Computer Science.
              I
              work primarily with data driven web applications, e-commerce
              platforms, and RESTful API’s.
            </p>

            <p>
              I’m also a hobby programmer, and I love dabbling in new technology
              when I can. In my free time, I’ve been learning React.js and
              honing
              my front end skills.
            </p>

            <p>
              When I’m not writing code, I’m an avid guitarist and drummer as
              well
              as a huge fan of esports. You can usually catch me on weekends
              watching League of Legends or Counter Strike tournaments, or
              playing
              some competitive strategy games myself. Or you might find me
              relaxing with my wife Alex and our Bengal cat Sterling.
            </p>
          </div>

          <img
            className="about-img"
            src="/img/myface.jpg"
            alt="A portrait style photo of Kyle Pollich's face"
          />
        </div>
      </Layout>
    )
  }
}

export default About
