import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Bubble, Doughnut, Polar, Radar, HorizontalBar } from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "right",
    color: theme.palette.text.secondary,
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Bubble />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Doughnut />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Polar />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Radar />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <HorizontalBar />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
