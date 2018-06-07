import React from "react";
import { Router, Route, Link } from "react-router-dom";
import { history } from '../src/index';

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components
const Main = () => <h2>Main</h2>;

const Sandwiches = () => <h2>Sandwiches</h2>;

const Login = () => (
  <div>
    <h2>login</h2>
  </div>
);

////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: "/sandwiches",
    component: Sandwiches
  },
  {
    path: "/login",
    component: Login
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const RouteConfigExample = () => (
  <Router history={history}>
    <div>
      <ul>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/sandwiches">Sandwiches</Link>
        </li>
      </ul>

      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  </Router>
);

export default RouteConfigExample;
