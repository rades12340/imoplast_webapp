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
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: `48px 8px 12px`,
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
    media: {
      maxHeight: "64px",
      height: "7vh",
    },
    link: {
      color: theme.palette.text.secondary,
      textDecoration: "none",
      fontSize: "1rem",
      lineHeight: "1.5",
      marginBottom: "0.35em",
      fontWeight: 400,
      display: "block",
    },
    footerLink: {
      textDecoration: "none",
      color: theme.palette.text.secondary,
    },
  })
);

export default () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item container lg={12} spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <img
              className={classes.media}
              src="/images/logo.png"
              title="logo-company"
            />
            <Typography
              variant="body2"
              color="textSecondary"
              align="left"
              gutterBottom
            >
              Najvisi odnos kvaliteta i cene u industriji
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <Box>
              <Typography
                variant="h6"
                color="textSecondary"
                align="left"
                gutterBottom
              >
                Istrazite sajt
              </Typography>

              <Link href="/proizvodi">
                <a className={classes.link}>Proizvodi</a>
              </Link>

              <Link href="/o_nama">
                <a className={classes.link}>O nama</a>
              </Link>

              <Link href="/partneri">
                <a className={classes.link}>Nasi Partneri</a>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <Box>
              <Typography
                variant="h6"
                color="textSecondary"
                align="left"
                gutterBottom
              >
                Posetite nas
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                align="left"
                gutterBottom
              >
                37235 Trnavci bb.,
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                align="left"
                gutterBottom
              >
                Opstina Aleksandrovac,
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                align="left"
                gutterBottom
              >
                Republika Srbija
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <Box>
              <Typography
                variant="h6"
                color="textSecondary"
                align="left"
                gutterBottom
              >
                Istrazite sajt
              </Typography>
              <a className={classes.link} href="/">
                Facebook
              </a>
              <a className={classes.link} href="/">
                Instagram
              </a>
              <a className={classes.link} href="/">
                Twitter
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <Box>
              <Typography
                variant="h6"
                color="textSecondary"
                align="left"
                gutterBottom
              >
                Pravila upotrebe sajta
              </Typography>
              <a className={classes.link} href="/">
                Uslovi
              </a>
              <a className={classes.link} href="/">
                Privatnost
              </a>
            </Box>
          </Grid>
        </Grid>
        <Grid item container lg={12}>
          <Grid item md={6} lg={6}>
            <Typography
              variant="body2"
              color="textSecondary"
              align="left"
              gutterBottom
            >
              @ 2020 RadiSav. Sva prava zadrzana
            </Typography>
          </Grid>

          <Grid item md={6} lg={6}>
            <Typography
              variant="body2"
              color="textSecondary"
              align="right"
              gutterBottom
            >
              <Link href="/proizvodi">
                <a className={classes.footerLink}>
                  Sledeca stranica: Proizvodi
                </a>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
