import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import APIHandler from './utilities/apiHandler';
import Fetcher from './utilities/fetcher';
import Items from 'components/all_items_page/Items';
import Item from 'components/item_page/Item';
import Login from 'components/login/Login';
import './App.scss';

function App() {
  const apiHandler = new APIHandler(new Fetcher());
  return (
    <div className="App">
      <header className="header">
        <a href="/">Rebay</a>
      </header>
      <Router>
        <Route path="/login" exact render={() => <Login apiHandler={apiHandler} />} />
        <Route path="/" exact render={() => <Items apiHandler={apiHandler} />} />
        <Route path="/items" exact render={() => <Items apiHandler={apiHandler} />} />
        <Route path="/items/:id" exact render={props => <Item apiHandler={apiHandler} {...props} />} />
      </Router>
    </div>
  );
}

export default App;
