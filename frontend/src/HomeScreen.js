import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import UserContext from './user/UserContext';

const HomeScreen = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Jobly</h2>
      <p>All the jobs in one, convenient place.</p>
      {user.loggedIn ?
        <h3>Welcome Back</h3>
        :
        <Link to="/login" className="btn btn-primary">Login</Link>
      }
    </div>
  );
}

export default HomeScreen;