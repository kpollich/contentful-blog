import React, { Component } from 'react'

import Hero from '../../components/Hero'
import HomeBlurb from '../../components/HomeBlurb'
import Layout from '../../components/Layout'
import SkillsContainer from '../../components/SkillsContainer'
import Workplaces from '../../components/Workplaces'

import './Home.css'

class Home extends Component {
  render() {
    return (
      <Layout>
        <Hero />
        <HomeBlurb />
        <SkillsContainer />
        <Workplaces />
      </Layout>
    )
  }
}

export default Home
