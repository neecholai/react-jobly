import React, { useContext } from 'react';
import UserContext from './user/UserContext';
import { NavLink } from "react-router-dom";
import './App.css';

const NavBar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-5">
      <NavLink className="navbar-brand" to='/'>Jobly</NavLink>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>
      {user.loggedIn ?
        <div className="collapse navbar-collapse ">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to='/companies'>Companies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/jobs'>Jobs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/profile'>Profile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/login' onClick={logout}>Logout</NavLink>
            </li>
          </ul>
        </div>
        :
        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="navbar-text">
              <NavLink className="nav-link" to='/login'>Login</NavLink>
            </li>
          </ul>
        </div>
      }
    </nav>
  );
}

export default NavBar;
