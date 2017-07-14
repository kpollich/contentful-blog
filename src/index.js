import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'

import 'bulma/css/bulma.css'
import './index.css'

import About from './pages/About'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Post from './pages/Post'
import Projects from './pages/Projects'

const app = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/blog/:slug" component={Post} />
      <Route path="/projects" component={Projects} />
    </Switch>
  </Router>
)

ReactDOM.render(app, document.getElementById('root'))
registerServiceWorker()
