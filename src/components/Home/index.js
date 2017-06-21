import React, { Component } from "react";

import Footer from "../Footer";
import Header from "../Header";
import PostList from "../PostList";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <PostList />
        <Footer />
      </div>
    );
  }
}

export default Home;
