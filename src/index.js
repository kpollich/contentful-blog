import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'

import About from './components/About'
import Blog from './components/Blog'
import Home from './components/Home'
import Projects from './components/Projects'

import './index.css'

const app = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/projects" component={Projects} />
    </Switch>
  </Router>
)

ReactDOM.render(app, document.getElementById('root'))
registerServiceWorker()
