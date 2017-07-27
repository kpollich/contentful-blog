import moment from 'moment'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './PostListItem.css'

class PostListItem extends Component {
  render() {
    const { datePublished, title, subtitle, slug } = this.props

    return (
      <div className="post-list-item">
        <h1 className="title is-4">
          <Link to={`/blog/${slug}`}>
            {title}
          </Link>
        </h1>
        <h2 className="subtitle is-5">
          {subtitle}
        </h2>
        <span>
          {moment(datePublished).format('MMMM D, YYYY')}
        </span>
      </div>
    )
  }
}

export default PostListItem
