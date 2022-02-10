import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import 'react-loading-skeleton/dist/skeleton.css';

import 'bulma/css/bulma.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
