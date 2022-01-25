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
          <Route path="/api/products/">
            <Main />
          </Route>
          <Route path="/api/product/:id">
            <Detail />
          </Route>
          <Route path="/product/:id/edit">
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

