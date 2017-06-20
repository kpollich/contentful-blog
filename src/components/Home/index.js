import React, { Component } from 'react';

import Header from '../Header'
import PostList from '../PostList'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <h2>Here are some posts</h2>
        <PostList />
      </div>
    );
  }
}

export default Home;