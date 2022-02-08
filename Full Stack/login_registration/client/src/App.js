import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from './views/LoginPage';
import LoggedIn from './views/LoggedIn';

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoginPage user={user} setUser={setUser}/>
          </Route>
          <Route path="/users">
            <LoggedIn user={user} setUser={setUser} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;