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
  ListItemText,
  Card,
  CardContent,
  Button,
  createStyles,
  Theme,
  makeStyles,
} from "@material-ui/core";

interface HomeProps {
  setLoggedIn: any;
}

const drawerWidth = 240;

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
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    project_card: {
      width: 200,
      height: 200,
      margin: 50,
      display: "inline-flex",
    },
    logout_btn: {
      position: "fixed",
      width: 240,
      bottom: 0,
    },
  })
);

function Navigation({ setLoggedIn }: HomeProps) {
  const classes = useStyles();
  function signOut() {
    firebase.auth().signOut();
    setLoggedIn(false);
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            TodoIt
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {["Home", "My Lists", "Calendar", "Statistics"].map(
              (text, index) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
          <List>
            <ListItem button className={classes.logout_btn} onClick={signOut}>
              <ListItemText>Log Out</ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Card className={classes.project_card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              List 1
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.project_card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              List 2
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.project_card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              List 3
            </Typography>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default Navigation;
