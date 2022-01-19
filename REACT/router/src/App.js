import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Form from './views/Form';
import Country from './views/Country';
import Activity from './views/Activity';
import StyledText from './views/StyledText';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>React Router 5 Demo</h1>
        <Link to="/home"> Home |</Link>
        <Link to="/about"> About |</Link>
        <Link to="/form"> Form |</Link>
        <Link to="/travel/japan"> Japan |</Link>
        <Link to="/travel/japan/snowboarding"> Snowboarding |</Link>
        <Link to="http://www.google.com"> Google By Link |</Link>
        <Link to="/hello/red"> Hello in Red |</Link>
        <a href="http://www.google.com"> Google by anchor tag </a>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/travel/:country/:activity">
            <Activity />
          </Route>
          <Route path="/travel/:country">
            <Country />
          </Route>
          <Route path="/:keyword/:textcolor">
            <StyledText />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
