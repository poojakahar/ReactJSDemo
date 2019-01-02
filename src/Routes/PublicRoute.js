import React from 'react';
import {Redirect, Route} from 'react-router-dom';

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(routeProps) => (
    !localStorage.getItem('authToken')
      ? <Component {...routeProps} />
      : <Redirect to='/home' />
  )} />
);

