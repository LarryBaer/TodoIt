import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  createStyles,
  Theme,
  makeStyles,
  IconButton,
} from "@material-ui/core";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      background: "#00b9be",
      justifyContent: "space-between",
    },
    profile_btn: {
      color: "white",
      position: "fixed",
      right: 10,
    },
  })
);

function NavBar() {
  const classes = useStyles();
  return (
    <div className="navbar">
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            TodoIt
          </Typography>
          <IconButton className={classes.profile_btn}>
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
