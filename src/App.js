import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ItemsPage from 'components/all_items_page/Items.js';
import APIHandler from './utilities/apiHandler';
import Fetcher from './utilities/fetcher';
import './App.scss';

function App() {
  const apiHandler = new APIHandler(new Fetcher());
  return (
    <div className="App">
      <header className="header">
        Rebay
      </header>
      <Router>
        <Route path="/" exact render={() => <ItemsPage apiHandler={apiHandler} />} />
        <Route path="/items" exact render={() => <ItemsPage apiHandler={apiHandler} />} />
      </Router>
    </div>
  );
}

export default App;
