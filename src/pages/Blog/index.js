import React, { Component } from 'react'

import Layout from '../../components/Layout'
import PostList from '../../components/PostList'

class Blog extends Component {
  render() {
    return (
      <Layout>
        <PostList />
      </Layout>
    )
  }
}

export default Blog
