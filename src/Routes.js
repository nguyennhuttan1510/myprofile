import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Home from './view/Home/Home';
import Login from './view/Login/Login';
import Manager from './view/Detail/Detail';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/myprofile">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <PrivateRoute path="/manager">
        <Manager />
      </PrivateRoute>
    </Switch>
  );
};

Routes.propTypes = {};

export default Routes;
