import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn";
import Nav from "./components/Layout/Nav";
import SignupContainer from './container/auth/SignupContainer';


function App() {
  return (
    <div className="container">
    <BrowserRouter>
      <Nav />
      <Switch>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/" component={SignupContainer}/>
      <Route exact path="/signin" component={SignIn}/>
     
      </Switch>
    </BrowserRouter>
  </div>


  );
}

export default App;
