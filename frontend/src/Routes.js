import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import LoginForm from "./user/LoginForm";
import ProfileForm from "./user/ProfileForm";
import CompanyList from "./company/CompanyList";
import JobList from "./job/JobList";
import './App.css';

const Routes = ({user}) => {
  return (
    <div>
      <Switch>
        <Route exact path="/"><HomeScreen loggedIn={user.loggedIn}/></Route>
        {/* <Route exact path="/login"><LoginForm /></Route> */}
        <Route exact path="/profile"><ProfileForm /></Route>
        <Route exact path="/companies"><CompanyList /></Route>
        <Route exact path="/companies/:name"><JobList /></Route>
        <Route exact path="/jobs"><JobList/></Route>
        <Redirect to="/s" />
      </Switch>
    </div>
  );
}

export default Routes;
