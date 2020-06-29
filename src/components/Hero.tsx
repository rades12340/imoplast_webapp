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
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    topGrid: {
      position: "relative",
      maxHeight: "700px",
      display: "grid",
      placeItems: "center",
      [theme.breakpoints.down("md")]: {
        height: "90vh",
        marginBottom: "64px",
      },
    },
    bottomGrid: {
      position: "relative",
      height: "100vh",
      maxHeight: "700px",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    textAlign: {
      position: "relative",
      display: "grid",
      justifyContent: "center",
      textAlign: "left",
      [theme.breakpoints.up("md")]: {
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "left",

        height: "100%",
      },
    },
    links: {
      position: "absolute",
      left: 0,
      bottom: 0,
    },
    link: {
      paddingRight: "1rem",
    },
  })
);

const Home = ({ src }) => {
  const classes = useStyles();

  return (
    <Container style={{ position: "relative" }}>
      <Grid container>
        <Grid item xs={11} lg={7} className={classes.topGrid}>
          <Box className={classes.textAlign}>
            <Typography
              variant="h3"
              color="textSecondary"
              align="left"
              gutterBottom
            >
              Proizvodnja plastičnih delova najviseg kvaliteta
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              align="left"
              gutterBottom
            >
              Osnovni program Imoplasta čine plastični delovi koji nalaze
              primenu u oblasti hidrauličkih armatura, hidrauličkih creva i
              priključnih elemenata, sanitarnih armatura, pneumatike,
              elektroinstalacija , dok je deo proizvodnje usmeren ka uslužnom
              brizganju do 350g gde postoji mogućnost i izrade kalupa po
              potrebama kupca.
            </Typography>
            <Box>
              <Link href="/proizvodi">
                <Button
                  variant="contained"
                  color="secondary"
                  endIcon={<ArrowForwardIcon />}
                >
                  Proizvodi
                </Button>
              </Link>
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
        </Grid>
        <Grid item xs={1} lg={5} className={classes.bottomGrid}>
          <Box style={{ overflow: "hidden" }}>
            <img
              src={src}
              alt=""
              style={{
                minHeight: "500px",
                objectPosition: "center",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
