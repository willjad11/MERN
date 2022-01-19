import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import TextStyle from './views/TextStyle';
import DisplayText from './views/DisplayText';
import Home from './views/Home';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/home"> Home |</Link>
        <Link to="/4"> Number 4 |</Link>
        <Link to="/hello"> Say hi! |</Link>
        <Link to="/hello/blue/red"> Say hi in red and blue! |</Link>

        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/:desiredString/:textColor/:bgColor">
            <TextStyle />
          </Route>
          <Route path="/:desiredString">
            <DisplayText />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
