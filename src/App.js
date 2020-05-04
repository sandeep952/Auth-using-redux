import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import SignupContainer from './container/auth/SignupContainer';
import NavContainer from './container/NavContainer';
import SignInContainer from './container/auth/SignInContainer';


function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <NavContainer/>
      <Switch>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/" component={SignupContainer}/>
      <Route exact path="/signin" component={SignInContainer}/>     
      </Switch>
    </BrowserRouter>
  </div>


  );
}

export default App;
