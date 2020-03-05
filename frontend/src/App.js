import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./Routes";
import NavBar from "./NavBar";
import './App.css';
import UserContext from './user/UserContext';

const App = () => {
  const INITIAL_STATE = localStorage.getItem('_token') ?
  { username: localStorage.getItem('username'), loggedIn: true } :
  { username: "", loggedIn: false };
  const [user, setUser] = useState(INITIAL_STATE);

  const login = () => {
    setUser({ username: localStorage.getItem('username'), loggedIn: true });
  }
  
  const logout = () => {
    setUser({ username: "", loggedIn: false });
    localStorage.removeItem('_token');
  }
  
  return (
    <div className="App" >
      <UserContext.Provider value={{ user, login, logout }}>
        <BrowserRouter>
          <NavBar />
          <Routes />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
