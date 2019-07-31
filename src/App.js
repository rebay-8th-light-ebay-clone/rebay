import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import APIHandler from './utilities/APIHandler/apiHandler';
import Items from 'components/all_items_page/Items';
import Item from 'components/item_page/Item';
import Login from 'components/login/Login';
import CreateItemPage from 'components/create_item/CreateItemPage';
import UpdateItemPage from 'components/update_item/UpdateItemPage';
import UserBids from 'components/user_bids_page/UserBids';
import UserItems from 'components/user_items_page/UserItems';
import './App.scss';

const apiHandler = new APIHandler();

export const UnauthenticatedApp = (props) => {
  return (
    <div className="App">
      <Router>
        <Switch>
          {props.children}
          <Route path="/login/:uuid" render={(props) => <Login apiHandler={apiHandler} {...props} />} />
          <Route path="/login" render={(props) => <Login apiHandler={apiHandler} {...props} />} />
          <Route path="/users/:user_uuid/items/:uuid" render={props => <Item apiHandler={apiHandler} {...props} />} />
          <Route path="/items" render={() => <Items apiHandler={apiHandler} />} />
          <Route path="/" render={() => <Items apiHandler={apiHandler} />} />
        </Switch>
      </Router>
    </div>
  );
}

export const AuthenticatedApp = (props) => {
  return (
    <UnauthenticatedApp>
      <Route path="/user/:uuid/items" exact render={(props) => <UserItems apiHandler={apiHandler} {...props} />} />
      <Route path="/user/:uuid/bids" exact render={(props) => <UserBids apiHandler={apiHandler} {...props} />} />
      <Route path="/users/:user_uuid/items/:uuid/edit" exact render={(props) => <UpdateItemPage apiHandler={apiHandler} {...props} />} />
      <Route path="/users/:user_uuid/items/new" render={props => <CreateItemPage apiHandler={apiHandler} {...props} />} />
      {props.children}
    </UnauthenticatedApp>
  )
}