import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Home from './view/Home/Home';

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/myprofile">
        <Home />
      </Route>
    </Switch>
  );
};

Routes.propTypes = {};

export default Routes;
