import React, { Component } from "react";

import Layout from "../Layout";
import PostList from "../PostList";

class Home extends Component {
  render() {
    return (
      <Layout>
        <PostList />
      </Layout>
    );
  }
}

export default Home;
