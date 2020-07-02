import React from 'react';
import ReactDOM from 'react-dom';

import 'bootswatch/dist/flatly/bootstrap.min.css';

import Router from './Router';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
