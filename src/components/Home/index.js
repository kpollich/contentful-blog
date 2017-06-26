import React, { Component } from "react";
import { Link } from "react-router-dom";

import Layout from "../Layout";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Layout>
        <div className="flex-container-centered">
          <p className="home-blurb">
            Hello, I'm Kyle! I am a Software Engineer and Full Stack Web
            Developer
            currently located in Lancaster, Pennsylvania. I specialize in Ruby
            on
            Rails and Javascript applications. If you're interested in working
            with me or knowing a bit more about what I do, check out my{" "}
            <Link to="/about">about</Link> page
            or view my online <Link to="/resume">resume</Link>. I am always open
            to hearing about
            opportunities via <a href="mailto:kpollich1@gmail.com">email</a>.
            You
            can also find me on{" "}
            <a href="https://twitter.com/kylepollich">Twitter</a> and{" "}
            <a href="https://github.com/kpollich">GitHub</a>.
          </p>
        </div>
      </Layout>
    );
  }
}

export default Home;
