import React from 'react';
// import { Router, Route } from 'react-router';

import App from './App';
// import Contact from './pages/Contact';

// const Routes = (props) => (
//   <Router {...props}>
//     <Route path="/" component={App}>
//       <Route path="/contact" component={Contact} />
//       {/*<Route path="*" component={NotFound} />*/}
//     </Route>
//   </Router>
// );

// export default Routes;

function errorLoading(error) {
  throw new Error(`Dynamic page loading failed: ${error}`);
}

// Loading modules!
function loadRoute(cb) {
  return module => cb(null, module.default);
}

export default {
  path: '/',
  component: App,
  childRoutes: [
    {
      path: '/contact',
      getComponent(location, cb) {
        System.import('./pages/Contact')
          .then(loadRoute(cb, false))
          .catch(errorLoading);
      }
    }
  ]
}
