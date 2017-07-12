import moment from 'moment'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostListItem extends Component {
  render() {
    const { datePublished, title, subtitle, slug } = this.props

    return (
      <li className="content">
        <h3 className="title">
          <Link to={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>
        <h4 className="title">
          {subtitle}
        </h4>
        <p>
          {moment(datePublished).format('MMMM D, YYYY')}
        </p>
      </li>
    )
  }
}

export default PostListItem
