import React from 'react';
import { Route } from 'react-router';
import CartContainer from './containers/CartContainer.js';

export default (
    <Route exact path="/cart" component={CartContainer} />
);