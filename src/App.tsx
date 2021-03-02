import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import firebase from "firebase";

// Import pages
import LogIn from "./Pages/login";
import Home from "./Pages/home";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // If a user is logged in, change the state accordingly
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setLoggedIn(true);
      }
    });
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Route
          path="/home"
          exact
          render={(props) => <Home {...props} setLoggedIn={setLoggedIn} />}
        />
        <Route path="/login" exact component={LogIn} />
        <Route
          path="/"
          render={() =>
            loggedIn ? <Redirect to="/home" /> : <Redirect to="/login" />
          }
        ></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
