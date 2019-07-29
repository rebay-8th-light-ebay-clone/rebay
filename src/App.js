import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import APIHandler from './utilities/APIHandler/apiHandler';
import Items from 'components/all_items_page/Items';
import Item from 'components/item_page/Item';
import Login from 'components/login/Login';
import CreateItemPage from 'components/create_item/CreateItemPage';
import './App.scss';

export const UnauthenticatedApp = (props) => {
  const apiHandler = new APIHandler();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login/:uuid" exact render={(props) => <Login apiHandler={apiHandler} {...props} />} />
          <Route path="/login" exact render={(props) => <Login apiHandler={apiHandler} {...props} />} />
          <Route path="/" exact render={() => <Items apiHandler={apiHandler} />} />
          <Route path="/items" exact render={() => <Items apiHandler={apiHandler} />} />
          <Route path="/items/new" exact render={() => <CreateItemPage />} />
          <Route path="/users/:user_uuid/items/:uuid" exact render={props => <Item apiHandler={apiHandler} {...props} />} />
        </Switch>
        {props.children}
      </Router>
    </div>
  );
}

export const AuthenticatedApp = () => {
  return (
    <UnauthenticatedApp>
    </UnauthenticatedApp>
  )
}
