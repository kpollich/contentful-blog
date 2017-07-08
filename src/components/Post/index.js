import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { getPostBySlug } from '../../lib/contentful'

import Layout from '../Layout'

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      subtitle: '',
      content: '',
      slug: ''
    }
  }

  componentDidMount() {
    const { slug } = this.props.match.params

    getPostBySlug(slug).then(response => {
      const post = response.items[0].fields
      this.setState({ ...post })
    })
  }

  render() {
    const { title, subtitle, content } = this.state
    return (
      <Layout>
        <div className="post-container">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>

          <ReactMarkdown source={content} />
        </div>
      </Layout>
    )
  }
}

export default Post
