import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// Import pages
import LogIn from "./Pages/login";
import Home from './Pages/home';

function App() {

//If user is not logged in, send to login page, otherwise send to home
const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
           <Route path="/login" exact component={LogIn}/>
           <Route path="/home" exact component={Home}/>
           <Route path="/" render={() => <div>404</div>}></Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
  }

export default App;
