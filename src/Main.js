import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';

function Main() {
  return (
    <main>
      <Switch>
        <Route path exact="/" component={Login} />
      </Switch>
    </main>
  );
}

export default Main;
