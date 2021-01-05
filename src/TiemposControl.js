import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ListedBuses from "./Components/ListedBuses";
import Filter from "./Components/Filter";
import BusInfo from "./Components/BusInfo";
import StaffInfo from "./Components/StaffInfo";
import BusQuery from "./Components/BusQuery";
import Header from "./Components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#30a7b5"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100%",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  info: {}
}));

export default function TiemposControl() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Bus monitor */}
            <Grid item xs={8}>
              <Paper className={classes.paper}>
                <Filter />
                <Header />
                <ListedBuses />
                <BusInfo />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <BusQuery />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3} justify="center">
            {/* Bus info */}
            <Grid item xs={10}>
              <Paper className={classes.paper}>
                <StaffInfo />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
