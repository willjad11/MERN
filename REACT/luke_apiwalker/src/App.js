import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Planets from './views/Planets';
import People from './views/People';
import Search from './views/Search';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Switch>
          <Route path="/people/:id">
            <People />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/planets/:id">
            <Planets />
          </Route>
          <Route path="/planets">
            <Planets />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
