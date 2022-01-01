import './App.css';
import React, { useState } from 'react';
import Home from './components/home/home'
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios';

function App() {

  /** Store logined user details in useState */
  const [user, setUser] = useState({});
  const [taskDetails, setTaskDetails] = useState({})

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user.email ? <Home loginUser={user} setUser={setUser} /> : <Login setUser={setUser} />
            }
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
