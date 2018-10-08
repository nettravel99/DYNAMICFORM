import React from "react";
import {Route} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import ConfirmationPage from "./components/pages/confirmationPage";
import SignupPage from "./components/pages/SignupPage";
import UserRoute from './components/Routes/UserRoute'
import GuestRoute from './components/Routes/GuestRoute'
/**
 * ComponentName
 */

const App = () => (
  <div className="ui container">
    <Route path="/" exact component={HomePage}/>
    <Route path="/confirmation/:token" exact component={ConfirmationPage}/>
    <GuestRoute path="/login" exact component={LoginPage}/>
    <GuestRoute path="/signup" exact component={SignupPage}/>
    <UserRoute path="/dashboard" exact component={DashboardPage}/>
  </div>
);

export default App;
