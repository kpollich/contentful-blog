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
    const postNodes = this.state.posts
      .sort(
        (first, second) =>
          new Date(first.datePublished).getTime() <
          new Date(second.datePublished).getTime()
      )
      .map(post => {
        return <PostListItem {...post} key={post.slug} />
      })

    return (
      <div className="post-list-container">
        {postNodes}
      </div>
    )
  }
}

export default PostList
