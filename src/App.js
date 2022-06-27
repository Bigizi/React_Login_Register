import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Login from './components/Login/login.jsx';
import Register from './components/Register/register.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Login />
            
            </Route>
            <Route path="./Register">
              <Register />
            </Route>
            </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
