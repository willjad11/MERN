import React from 'react';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/api/authors">
            <Link to={'/api/authors/create'}>Add an author</Link>
            <Main />
          </Route>
          <Route path="/api/authors/:id/edit">
            <Link to={'/api/authors'}>Home</Link>
            <Update />
          </Route>
          <Route path="/api/authors/create">
            <Link to={'/api/authors'}>Home</Link>
            <Create />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

