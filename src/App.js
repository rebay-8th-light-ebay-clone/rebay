import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
<<<<<<< HEAD
import ItemsPage from 'components/all_items_page/Items.js';
import APIHandler from './utilities/apiHandler';
import Fetcher from './utilities/fetcher';
=======
import Items from 'components/all_items_page/Items';
import Item from 'components/item_page/Item';
>>>>>>> Rename files and folders to be more intuitive
import './App.scss';

function App() {
  const apiHandler = new APIHandler(new Fetcher());
  return (
    <div className="App">
      <header className="header">
        Rebay
      </header>
      <Router>
<<<<<<< HEAD
        <Route path="/" exact render={() => <ItemsPage apiHandler={apiHandler} />} />
        <Route path="/items" exact render={() => <ItemsPage apiHandler={apiHandler} />} />
=======
        <Route path="/" exact component={Items} />
        <Route path="/items" exact component={Items} />
        <Route path="/items/:id" exact component={Item} />
>>>>>>> Rename files and folders to be more intuitive
      </Router>
    </div>
  );
}

export default App;
