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
              Odlicni uslovi snabdevanja materijala rada
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              align="left"
              gutterBottom
            >
              Imamo odlicne uslove snabdevanje materijala izrade tako da ni u
              jednom trenutku ne dodje do obustavljanje proizvodnje ili cekanja
              na dostavu
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography
              variant="h5"
              color="textSecondary"
              align="left"
              gutterBottom
            >
              Kolicinski popust za vece kolicine proizvoda
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              align="left"
              gutterBottom
            >
              Za sve zainteresovane kupce uvek postoji mogucnost dodatnog
              kolicinskog popusta u zavisnosti od vrste proizvoda.
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
              Pre same dostave svaki proizvod se proverava kako bi zadovoljio
              uslove zadate tehnickom dokumentacijom
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
