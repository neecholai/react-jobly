import React, { useContext } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import LoginForm from "./user/LoginForm";
import ProfileForm from "./user/ProfileForm";
import CompanyList from "./company/CompanyList";
import JobList from "./job/JobList";
import Company from "./company/Company";
import UserContext from './user/UserContext';
import NotFound from './NotFound';
import './App.css';

const Routes = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Switch>
        <Route exact path="/"><HomeScreen /></Route>
        <Route exact path="/login"><LoginForm /></Route>
        {
          user.loggedIn ?
              [<Route exact path="/profile"><ProfileForm /></Route>,
              <Route exact path="/companies"><CompanyList /></Route>,
              <Route exact path="/companies/:handle"><Company /></Route>,
              <Route exact path="/jobs"><JobList /></Route>]
            :
            <Redirect to="/" />
        }
        <Route><NotFound /></Route>
      </Switch>
    </div>
  );
}

export default Routes;
