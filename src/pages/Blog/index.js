import React, { Component } from 'react'

import Layout from '../../components/Layout'
import PostList from '../../components/PostList'

import './Blog.css'

class Blog extends Component {
  render() {
    return (
      <Layout>
        <div className="hero blog-hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-2">Blog Posts</h1>
              <h2 className="subtitle">Rants, Raves, and Writeups</h2>
            </div>
          </div>
        </div>
        <PostList />
      </Layout>
    )
  }
}

export default Blog
