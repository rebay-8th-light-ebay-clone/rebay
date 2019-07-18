import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ItemsPage from 'components/items/Container.js';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        Rebay
      </header>
      <Router>
        <Route path="/" exact component={ItemsPage} />
        <Route path="/items" exact component={ItemsPage} />
      </Router>
    </div>
  );
}

export default App;
