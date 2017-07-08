import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'
import { getPostBySlug } from '../../lib/contentful'

import Layout from '../Layout'

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      subtitle: '',
      content: '',
      slug: '',
      datePublished: '',
      isLoading: true
    }
  }

  componentDidMount() {
    const { slug } = this.props.match.params

    getPostBySlug(slug).then(response => {
      const post = response.items[0].fields
      this.setState({ ...post, isLoading: false })

      // After the post is loaded, we need to re-call Prism's highlight method to get
      // syntax highlighting to fire properly
      window.Prism.highlightAll()
    })
  }

  render() {
    if (this.state.isLoading) {
      // TODO: Spinner
      return <div />
    }

    const { title, subtitle, content, datePublished } = this.state
    return (
      <Layout>
        <div className="post-container">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{moment(datePublished).format('MMMM D, YYYY')}</p>

          <ReactMarkdown source={content} />
        </div>
      </Layout>
    )
  }
}

export default Post
