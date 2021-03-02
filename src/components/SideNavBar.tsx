import React from "react";
import firebase from "firebase";
import {
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  ListItem,
  createStyles,
  Theme,
  makeStyles,
  IconButton,
  Input,
  TextField,
} from "@material-ui/core";
// Import Icons
import AssessmentIcon from "@material-ui/icons/Assessment";
import HomeIcon from "@material-ui/icons/Home";
import ListAltIcon from "@material-ui/icons/ListAlt";
import TodayIcon from "@material-ui/icons/Today";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

interface HomeProps {
  setLoggedIn: any;
}

const drawerWidth = 100;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      background: "#00b9be",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
      marginTop:60,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    logout_btn: {
      position: "fixed",
      bottom: 0,
    },
  })
);

function SideNavBar({ setLoggedIn }: HomeProps) {

  const classes = useStyles();

  function signOut() {
    firebase.auth().signOut();
    setLoggedIn(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <List>
            <ListItem>
              <IconButton>
                <HomeIcon fontSize="large" />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton>
                <ListAltIcon fontSize="large" />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton>
                <TodayIcon fontSize="large" />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton>
                <AssessmentIcon fontSize="large" />
              </IconButton>
            </ListItem>
            <ListItem className={classes.logout_btn}>
              <IconButton onClick={signOut}>
                <ExitToAppIcon fontSize="large" />
              </IconButton>
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
      </main>
    </div>
  );
}

export default SideNavBar;
