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
import { motion } from "framer-motion";
import Router from "next/router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      height: "80vh",
      maxWidth: "1280px",
      maxHeight: "700px",
      margin: "auto",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "1fr 1fr 6em",
      gridTemplateAreas: `"header img"
          "header img"
          "links  img"`,
      [theme.breakpoints.down("sm")]: {
        gridTemplateAreas: `"img img"
          "header header"
          "links  links"`,
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
      position: "relative",
      overflow: "visible",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    link: {
      height: "3em",
      width: "3em",
      marginRight: theme.spacing(2),
    },
    marginHeaderText: {
      marginBottom: theme.spacing(4),
    },
    image: {
      objectFit: "cover",
      height: "auto",
      width: "100%",

      maxWidth: "500px",
      objectPosition: "center",
      [theme.breakpoints.down("md")]: {
        maxWidth: "500px",
      },
      [theme.breakpoints.down("sm")]: {
        maxHeight: "30vh",
        width: "auto",
      },
    },
    heroText: {
      fontFamily: "PT Serif",
      fontWeight: 700,
      fontSize: "5.5em",
    },
  })
);

const Hero = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.header}>
        <Typography
          variant="h2"
          color="textSecondary"
          align="left"
          gutterBottom
          className={classes.heroText}
        >
          Izrada namenskih proizvoda
        </Typography>
        <Typography
          variant="body1"
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
        <motion.img
          src={"/images/Navojni cep za zastitu unutrasnjeg navoja.png"}
          alt="Navojni cep za zastitu unutrasnjeg navoja"
          className={classes.image}
        />
      </Box>
    </Container>
  );
};

export default Hero;
