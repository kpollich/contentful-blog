import React, { Component } from 'react'

import { getPosts } from '../../lib/contentful'
import PostListItem from '../PostListItem'

import './PostList.css'

class PostList extends Component {
  constructor(props) {
    super(props)

    this.state = { posts: [] }
  }

  componentDidMount() {
    getPosts()
      .then(response => {
        const posts = response.items.map(item => item.fields)

        this.setState({ posts })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const postNodes = this.state.posts.reverse().map(post => {
      return <PostListItem {...post} key={post.slug} />
    })

    return (
      <div className="post-list-container">
        <h1 className="title">Blog Posts</h1>
        <h2 className="subtitle">Where I ramble and rant</h2>

        {postNodes}
      </div>
    )
  }
}

export default PostList
