import React from "react";

import {
    Typography,
    Card,
    CardContent,
    createStyles,
    Theme,
    makeStyles,
  } from "@material-ui/core";

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
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
  })
);

function ListCard() {
const classes = useStyles();
  return (
    <Card className={classes.project_card}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          List Card
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ListCard;
