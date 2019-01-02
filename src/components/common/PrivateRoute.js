import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import AuthContainer from '../../containers/AuthContainer';
import subscribe from "unstated-subscribe-hoc";


function PrivateRoute({authStore, role, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        (authStore.state.loggedIn && role == authStore.state.role) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
export default subscribe(PrivateRoute, { authStore: AuthContainer });
