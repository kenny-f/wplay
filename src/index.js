import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';

import routes from './routes';
import './index.css';



ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
