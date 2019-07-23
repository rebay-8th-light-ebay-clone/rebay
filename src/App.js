import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import APIHandler from './utilities/apiHandler';
import Fetcher from './utilities/fetcher';
import Items from 'components/all_items_page/Items';
import Item from 'components/item_page/Item';
import Login from 'components/login/Login';
import Header from 'components/header/Header';
import './App.scss';

export const UnauthenticatedApp = (props) => {
  const apiHandler = new APIHandler(new Fetcher());
  return (
    <div className="App">
      <Header user={localStorage.getItem("user")} />
      <Router>
        <Route path="/login" exact render={() => <Login apiHandler={apiHandler} />} />
        <Route path="/" exact render={() => <Items apiHandler={apiHandler} />} />
        <Route path="/items" exact render={() => <Items apiHandler={apiHandler} />} />
        <Route path="/items/:id" exact render={props => <Item apiHandler={apiHandler} {...props} />} />
        {props.children}      
      </Router>
    </div>
  );
}

export const AuthenticatedApp = () => {
  return (
    <UnauthenticatedApp>
      <Route path="/user/:uuid/bid/new" />
    </UnauthenticatedApp>
  )
}
