import React, { Component } from 'react'

class Workplaces extends Component {
  render() {
    return (
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
    )
  }
}

export default Workplaces
