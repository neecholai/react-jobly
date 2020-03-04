import React from 'react';
import { Link } from "react-router-dom";

const HomeScreen = ({ loggedIn }) => {
  return (
    <div>
      <h2>Jobly</h2>
      <p>All the jobs in one, convenient place.</p>
      {loggedIn ?
        <h3>Welcome Back</h3>
        :
        <Link to="/login" className="btn btn-primary">Login</Link>
      }
    </div>
  );
}

export default HomeScreen;