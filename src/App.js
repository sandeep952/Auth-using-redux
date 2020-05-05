import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import SignupContainer from './container/auth/SignupContainer';
import NavContainer from './container/NavContainer';
import SignInContainer from './container/auth/SignInContainer';
import LogOut from './container/auth/LogOut';
import PrivateRoute from './helper/PrivateRoute';


function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <NavContainer/>
      <Switch>
      <PrivateRoute exact path="/dashboard"> <Dashboard/> </PrivateRoute> 
      <Route exact path="/" component={SignupContainer}/>
      <Route exact path="/signin" component={SignInContainer}/> 
      <Route exact path="/logout" component={LogOut}/>     
    
      </Switch>
    </BrowserRouter>
  </div>


  );
}

export default App;
