import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import IconLinks from '../../components/IconLinks'
import Layout from '../../components/Layout'
import SkillsContainer from '../../components/SkillsContainer'

import './Home.css'

class Home extends Component {
  render() {
    return (
      <Layout>
        <div
          className="hero is-fullheight is-fullwidth has-text-centered"
          style={{
            backgroundImage: 'url(/img/firewatch-blue.png)',
            backgroundPositionY: 'center',
            backgroundRepeat: 'no-repeat'
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

        <div
          className="container has-text-centered"
          style={{ marginTop: '3em' }}
        >
          <div className="content is-medium">
            <h1 className="title is-2">Who I Am</h1>
            Hello, I'm Kyle! I am a Software Engineer and Full Stack Web
            Developer currently located in Lancaster, Pennsylvania. I love
            working with
            with Ruby on Rails and Javascript and architecting elegant, scalable
            web apps. If you're interested
            in working with me or knowing a bit more about what I do, feel free
            to contact me
            via{' '}
            <a href="mailto:kpollich1@gmail.com">email</a>.
          </div>
        </div>

        <SkillsContainer />

        <div className="container">
          <h1 className="title is-2 has-text-centered">Where I Work</h1>

          <div className="columns where-i-work-container">
            <div className="column">
              <h2 className="title is-3 has-text-centered">
                <a
                  href="http://shiftlabny.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shift Lab{' '}
                </a>
              </h2>

              <p className="content is-medium">
                Design minded development. Consulting, e-commerce platforms, and
                a wide array of development services. At Shift, we provide a
                compelling experience both for your users and your business.
              </p>
            </div>

            <div className="column">
              <h2 className="title is-3 has-text-centered">
                <a
                  href="https://www.pubforge.work"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pubforge
                </a>
              </h2>

              <p className="content is-medium">
                Pubforge is a full service coworking space located in beautiful
                downtown Lancaster. With tons of natural light and a fully
                stocked kitchen, this space promotes collaboration and community
                unlike any other.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Home
