import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Avatar,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: `48px 8px 0`,
    },
    avatar: {
      backgroundColor: theme.palette.text.primary,
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: theme.spacing(2),
    },
    avatarHeader: {
      display: "flex",
      alignItems: "center",
    },
  })
);

export default () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item lg={12}>
          <Typography
            variant="h5"
            color="textPrimary"
            align="left"
            gutterBottom
          >
            Prva motivacija
          </Typography>
          <Typography variant="h4" color="textSecondary" align="left">
            Niska cena proizvodnje
          </Typography>
          <hr
            style={{
              float: "left",
              width: "200px",
              height: "5px",
              backgroundColor: "orange",
            }}
          />
        </Grid>
        <Grid item container lg={12} spacing={3}>
          <Grid item lg={4}>
            <Typography
              variant="h5"
              color="textSecondary"
              align="left"
              gutterBottom
            >
              Odlicni uslovi snabdevanja sirovina
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              align="left"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              purus ornare velit, suspendisse. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Odio purus ornare velit, suspendisse.
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography
              variant="h5"
              color="textSecondary"
              align="left"
              gutterBottom
            >
              Za vece kolicine poseban popust
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              align="left"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              purus ornare velit, suspendisse. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Odio purus ornare velit, suspendisse.
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography
              variant="h5"
              color="textSecondary"
              align="left"
              gutterBottom
            >
              Maksimalan kvalitet za svaku jedinicu prozivoda
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              align="left"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              purus ornare velit, suspendisse. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Odio purus ornare velit, suspendisse.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
