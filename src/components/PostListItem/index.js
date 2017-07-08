import moment from 'moment'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'bulma/css/bulma.css'

class PostListItem extends Component {
  render() {
    const { datePublished, title, subtitle, slug } = this.props

    return (
      <li className="post-list-item">
        <p className="post-date">
          {moment(datePublished).format('MMMM D, YYYY')}
        </p>
        <h3 className="post-title">
          <Link to={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>
        <h4 className="post-subtitle">
          {subtitle}
        </h4>
      </li>
    )
  }
}

export default PostListItem
