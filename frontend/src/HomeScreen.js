import React from 'react';

const HomeScreen = ({loggedIn}) => {
  return (
    <div>
      <h2>Jobly</h2>
      <p>All the jobs in one, convenient place.</p>
      {loggedIn ?
        <h3>Welcome Back</h3>
        :
        <button type="button" class="btn btn-primary">Login</button>
      }
    </div>
  );
}

export default HomeScreen;