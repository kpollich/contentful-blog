import { createClient } from 'contentful'
import React, { Component } from 'react';
import moment from 'moment'

import './PostList.css'

const SPACE_ID = 'st2w4t2u7h9u'
const ACCESS_TOKEN = '6ea446be4294a1b10532d55ce88067fef62df2c0d636240b524a25da7d93a353'

class PostList extends Component {
  constructor (props) {
    super(props)

    this.state = { posts: [] }
  }
  componentDidMount () {
    const client = createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN
    })

    client.getEntries({ 'content_type': 'posts' })
      .then((response) => {
        const posts = response.items.map((item) => item.fields)

        this.setState({ posts })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    const postNodes = this.state.posts.map((post) => {
      console.log(post)
      return (
        <li className="post-list-item">
          <p className="post-date">{moment(post.datePublished).format('MMMM D, YYYY')}</p>
          <h3 className="post-title">{post.title}</h3>
          <h4 className="post-subtitle">{post.subtitle}</h4>
        </li>
      )
    })

    return (
      <ul className="post-list">
        {postNodes}
      </ul>
    )
  }
}

export default PostList;