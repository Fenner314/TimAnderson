import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import Context from './utils/context';

ReactDOM.render(
  <Context>
    <Router>
      <App />
    </Router>
  </Context>,
  document.getElementById('root')
);
