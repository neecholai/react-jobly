import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./NavBar";
import './App.css';

const App = () => {
  const INITIAL_STATE = { _token: "", username: "", loggedIn: true };
  const [user, setUser] = useState(INITIAL_STATE);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar loggedIn={user.loggedIn} />
        <Routes user={user}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
