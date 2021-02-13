import React, {Component} from 'react';
import loginStyles from '../css/login.module.css';
import mainImage from '../images/login_main_image.jpg';
import { Grid, TextField } from '@material-ui/core';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
    apiKey: "AIzaSyCbK5UFeg5DOdQkHH0M8sJCXBA9ZthPO88",
    authDomain: "todoit-fccd8.firebaseapp.com"
})

function LogIn(){
    var uiConfig: any={
        signInFlow:"popup",
        signInOptions:[
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks:{
            signInSuccess: () => false
        }

    }

    return(
        <div className={loginStyles.login_main}>
            <Grid 
            container
            className={loginStyles.login_main_grid}
            justify="center"
            alignItems="center"
            >
                <Grid item className={loginStyles.grid_item1} lg={8}>
                        <img className={loginStyles.main_logo_image} src={mainImage}></img>
                </Grid>
                <Grid item className={loginStyles.grid_item2} lg={4}>
                    <Grid item className={loginStyles.grid_welcome_header}>
                           <h1 className={loginStyles.welcome_header}>Welcome to 
                               <span className={loginStyles.header_brand_word}> TodoIt</span>
                           </h1>
                    </Grid>
                    <Grid item className={loginStyles.welcome_header}>
                        <StyledFirebaseAuth
                            className={loginStyles.google_login_button}
                            uiConfig={uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                    </Grid>
                    <Grid item>
                    <TextField className={loginStyles.email_input} id="outlined-basic" label="Email" variant="outlined" />
                    </Grid>
                    <Grid item>
                    <TextField className={loginStyles.password_input} id="outlined-basic" label="Password" variant="outlined" />
                    </Grid>
                    <Grid item>
                        <p>Or if you already have an account, <span className={loginStyles.signin_word}>sign in</span></p>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default LogIn;
