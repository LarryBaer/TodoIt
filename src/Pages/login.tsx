import React from "react";
import mainImage from "../images/login_main_image.jpg";
import { Grid, TextField } from "@material-ui/core";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Button from "@material-ui/core/Button";
import "firebaseui/dist/firebaseui.css";

import { createStyles, Theme, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    login_main_grid: {
      height: 100,
    },
    grid_item: {
      padding: 10,
    },
    welcome_header: {
      display: "inline",
      fontSize: 50,
    },
    header_brand_word: {
      color: "#00b9be",
    },
    main_logo_image: {
      maxWidth: "100%",
    },
    signin_word: {
      color: "00b9be",
      fontWeight: "bold",
    },
    login_main: {},
    grid_welcome_header: {},
    google_login_button: {},
    email_input: {},
    password_input: {},
    test: {},
  })
);

firebase.initializeApp({
  apiKey: "AIzaSyCbK5UFeg5DOdQkHH0M8sJCXBA9ZthPO88",
  authDomain: "todoit-fccd8.firebaseapp.com",
});

function LogIn() {
  const classes = useStyles();

  // Config for logging in
  var uiConfig: any = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  return (
    <div className={classes.login_main}>
      <Grid
        container
        className={classes.login_main_grid}
        justify="center"
        alignItems="center"
      >
        <Grid item className={classes.grid_item + classes.test} lg={8}>
          <img className={classes.main_logo_image} src={mainImage}></img>
        </Grid>
        <Grid item className={classes.grid_item} lg={4}>
          <Grid item className={classes.grid_welcome_header}>
            <h1 className={classes.welcome_header}>
              Welcome to
              <span className={classes.header_brand_word}> TodoIt</span>
            </h1>
          </Grid>
          <Grid item className={classes.google_login_button}>
            <StyledFirebaseAuth
              className={classes.google_login_button}
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </Grid>
          <Grid item className={classes.grid_item}>
            <TextField
              className={classes.email_input}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item className={classes.grid_item}>
            <TextField
              className={classes.password_input}
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </Grid>
          <Grid item className={classes.grid_item}>
            <Button variant="contained" color="primary">
              Log In
            </Button>
          </Grid>
          <Grid item className={classes.grid_item}>
            <p>
              Or if you already have an account,{" "}
              <span className={classes.signin_word}>sign in</span>
            </p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default LogIn;
