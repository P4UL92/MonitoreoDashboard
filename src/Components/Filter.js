import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";

import { makeStyles, withStyles } from "@material-ui/core/styles";

import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%" // Fix IE 11 issue.
  },
  paper: {
    display: "flex",
    border: `1px solid ${theme.palette.divider}`,
    flexWrap: "wrap"
  },
  divider: {
    margin: theme.spacing(1, 0.5)
  },

  spacing: {
    direction: "column",
    alignItems: "center",
    justify: "center",
    padding: theme.spacing(1, 0, 0)
  }
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: "none",
    "&:not(:first-child)": {
      borderRadius: theme.shape.borderRadius,
      color: "#30a7b5",
      "&:hover": {
        backgroundColor: "#30a7b5",
        color: "#ffffff"
      }
    },
    "&:first-child": {
      borderRadius: theme.shape.borderRadius,
      color: "#30a7b5",

      "&:hover": {
        backgroundColor: "#30a7b5",
        color: "#ffffff"
      }
    }
  }
}))(ToggleButtonGroup);

export default function Header() {
  const [alignment, setAlignment] = React.useState("left");
  const [formats, setFormats] = React.useState(() => ["italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

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
            <div>
              <Paper elevation={0} className={classes.paper}>
                <StyledToggleButtonGroup
                  size="small"
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton value="">AB:45</ToggleButton>
                  <ToggleButton value="center">BA:46</ToggleButton>
                </StyledToggleButtonGroup>
                <Divider
                  flexItem
                  orientation="vertical"
                  className={classes.divider}
                />
                <StyledToggleButtonGroup
                  size="small"
                  value={formats}
                  onChange={handleFormat}
                  aria-label="text formatting"
                >
                  <ToggleButton value="bold">Flota:125</ToggleButton>
                  <ToggleButton value="">Term A:5</ToggleButton>
                  <ToggleButton value="underlined">Term B:6</ToggleButton>
                </StyledToggleButtonGroup>
              </Paper>
            </div>
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
