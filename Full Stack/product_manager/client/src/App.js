import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/product/:id">
            <Detail />
          </Route>
          <Route exact path="/product/:id/edit">
            <Update />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

