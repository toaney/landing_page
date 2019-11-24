import React from 'react';
import './scss/styles.scss';
import { Route, Switch } from 'react-router-dom';
import Nav from "./components/nav.js";
import Landing from "./pages/landing.js";

function App() {
  return (
    <div className="background">
      <Nav />
      <Switch>
        <Route path="/home" component={Landing} />
        <Route path="/" component={Landing} />
      </Switch>
    </div>
    
  );
}

export default App;