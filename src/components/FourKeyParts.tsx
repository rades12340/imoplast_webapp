import React from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
  Avatar,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: `48px 8px 24px`,
    },
    avatar: {
      backgroundColor: theme.palette.text.primary,
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: theme.spacing(2),
    },
    item: { position: "relative" },
    paper: {
      boxSizing: "border-box",
      marginBottom: theme.spacing(2),
      minHeight: "12em",
      padding: theme.spacing(2),
      display: "grid",

      borderLeft: `4px solid ${theme.palette.text.primary}`,
      width: "100%",
    },
  })
);
const FourKeyParts = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} lg={12} md={12}>
          <Typography
            variant="h3"
            color="textSecondary"
            align="center"
            gutterBottom
          >
            Kvalitet na prvom mestu
          </Typography>
          <hr
            style={{
              width: "200px",
              height: "5px",
              backgroundColor: "orange",
            }}
          />
          <Typography
            variant="body1"
            color="textSecondary"
            align="center"
            gutterBottom
          >
            Dogugodisnje iskustvo u proizvodnji delova od plastike za mala,
            srenja i velika preduzeca.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4" color="textSecondary" align="left">
              Hidraulička creva i priključci
            </Typography>

            <Typography variant="body1" color="textSecondary" align="left">
              Izrada proizvoda od originalnog granulata po tehnickoj
              dokumentaciji za namenu u montaži i zaštiti hidrauličkih creva i
              priključaka
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4" color="textSecondary" align="left">
              Elektroinstalacije
            </Typography>

            <Typography variant="body1" color="textSecondary" align="left">
              Namenski proizvodi koji nalaze primenu u oblasti
              elektroinstalacija Dozna sa poklopcem u dimenziji 100mm x 100mm
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4" color="textSecondary" align="left">
              Hidraulicke armature
            </Typography>

            <Typography variant="body1" color="textSecondary" align="left">
              Proizvodnja zaštitnih kapa za navoje u skladu sa tehničkom
              dokumentacijom
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4" color="textSecondary" align="left">
              Sanitarne Armature
            </Typography>

            <Typography variant="body1" color="textSecondary" align="left">
              Primenjen u montaži vretena na ventil u dimenziji PV NP 8.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FourKeyParts;
