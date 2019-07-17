import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ItemsPage from 'views/ItemsPage';
import ItemPage from 'views/ItemPage';
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
        <Route path="/item/:id" exact component={ItemPage} />
      </Router>
    </div>
  );
}

export default App;
