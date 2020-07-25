import {
  Grid,
  makeStyles,
  createStyles,
  Theme,
  Box,
  Button,
  Container,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import Router from "next/router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      height: "80vh",
      maxWidth: "1280px",
      maxHeight: "700px",
      margin: "auto",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "1fr 1fr 6em",
      gridTemplateAreas: `"header header img"
          "header header img"
          "links  links  img"`,
      [theme.breakpoints.down("sm")]: {
        gridTemplateAreas: `"img img img"
          "header header header"
          "links  links  links"`,
      },
    },
    header: {
      gridArea: "header",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "flex-start",
      },
    },
    links: {
      gridArea: "links",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    img: {
      gridArea: "img",
      overflow: "visible",
      background:
        "url(/images/Navojni cep za zastitu unutrasnjeg navoja1.png) no-repeat center center scroll",
      backgroundSize: "cover",
      height: "100%",
      width: "auto",
      [theme.breakpoints.down("sm")]: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        maxHeight: "25vh",
      },
    },
    link: {
      height: "3em",
      width: "3em",
    },
    marginHeaderText: {
      marginBottom: theme.spacing(4),
    },
    image: {
      objectFit: "contain",
      height: "100%",
      width: "auto",
      maxWidth: "600px",
      objectPosition: "left",
      [theme.breakpoints.down("md")]: {
        maxWidth: "400px",
      },
      [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",
      },
    },
  })
);

const Hero = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.header}>
        <Typography
          variant="h3"
          color="textSecondary"
          align="left"
          gutterBottom
        >
          Dugogodišnje iskustvo u oblasti namenske proizvodnje
        </Typography>
        <Typography
          variant="h5"
          color="textSecondary"
          align="left"
          gutterBottom
          className={classes.marginHeaderText}
        >
          Nas osnovni program cine proizvodi u oblasti nameske proizvodnje, kao
          i usluzno brizganje
        </Typography>
        <Box>
          <Button
            onClick={() =>
              Router.push({
                pathname: "/proizvodi",
                query: { kategorija: "Svi proizvodi" },
              })
            }
            variant="contained"
            color="secondary"
            endIcon={<ArrowForwardIcon />}
          >
            Svi proizvodi
          </Button>
        </Box>
      </Box>
      <Box className={classes.links}>
        <a className={classes.link} href="/">
          <FacebookIcon fontSize="large" color="primary" />
        </a>
        <a className={classes.link} href="/">
          <InstagramIcon fontSize="large" color="primary" />
        </a>
        <a className={classes.link} href="/">
          <TwitterIcon fontSize="large" color="primary" />
        </a>
      </Box>
      <Box className={classes.img}>
        <img
          src={"/images/Navojni cep za zastitu unutrasnjeg navoja1.png"}
          alt="Navojni cep za zastitu unutrasnjeg navoja"
          className={classes.image}
        />
      </Box>
    </Container>
  );
};

export default Hero;
