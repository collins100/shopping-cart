import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import CartContainer from './CartContainer';
import ProductsContainer from './ProductsContainer';
//import HomePage from './HomePage';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
      <h1 className="App-title">Shopping-cart</h1>
      <Link className="white" to="/cart">Cart</Link>
    </header>
    <Route path="/" exact component={ProductsContainer} />
    <Route exact path="/cart" component={CartContainer} />



  </div>
);


export default App;
