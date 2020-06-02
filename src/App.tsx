import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Home, Clients, Companies } from './components/Pages';
import { Nav } from './Nav';

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/clients" component={Clients} />
        <Route path="/companies" component={Companies} />
      </Switch>
    </>
  );
}

export default App;
