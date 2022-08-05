import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Login from './Login';
import './css/normalize/normalize.css'
import Cadastro from './Cadastro';

function App() {
  return (

    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Cadastro />
          </Route>

        </Switch>
      </div>
    </Router>


  );
}

export default App;
