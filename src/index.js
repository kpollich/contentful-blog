import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Home from './components/Home'

import './index.css';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
