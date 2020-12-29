import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%" // Fix IE 11 issue.
  },
  paper: {
    display: "flex"
  },
  boxbackground: {
    backgroundColor: "#17a2b8",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#047085"
    }
  },
  spacing: {
    direction: "column",
    alignItems: "center",
    justify: "center",
    padding: theme.spacing(1, 0, 0)
  }
}));
export default function Header() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="lg">
      <div>
        <Grid container>
          {/* Mapeo */}
          <Grid item xs={12} md={4} lg={3} className={classes.spacing}>
            <Typography variant="body2" color="textSecondary" align="center">
              MONITOREO TIEMPO REAL
            </Typography>
          </Grid>
          {/* Recent Deposits */}
          <Grid className={classes.paper} item xs={12} md={8} lg={9}>
            <Button color="primary">Filtrar</Button>
            <Grid item spacing={3}>
              <Button
                className={classes.boxbackground}
                variant="contained"
                color="primary"
              >
                Flota:125
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.boxbackground}
                variant="contained"
                color="primary"
              >
                AB:46
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.boxbackground}
                variant="contained"
                color="primary"
              >
                BA
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.boxbackground}
                variant="contained"
                color="primary"
              >
                TermA:05
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.boxbackground}
                variant="contained"
                color="primary"
              >
                TermB:06
              </Button>
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Paraderos"
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
