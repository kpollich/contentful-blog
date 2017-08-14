import React, { Component } from 'react'

class HomeBlurb extends Component {
  render() {
    return (
      <div className="container has-text-centered" style={{ marginTop: '3em' }}>
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
    )
  }
}

export default HomeBlurb
