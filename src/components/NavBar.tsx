import React from "react";
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
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      background: "#00b9be",
      justifyContent:'space-between',
    },
    logout_btn: {
      position: "fixed",
      bottom: 0,
    },
    profile_btn:{
        color:'white',
        position:"fixed",
        right:10,
    },
  })
);

function NavBar() {
  const classes = useStyles();
  return (
    <div className="Statistics">
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            TodoIt
          </Typography>
          {/* <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" />
          </form> */}
          <IconButton className={classes.profile_btn}>
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
