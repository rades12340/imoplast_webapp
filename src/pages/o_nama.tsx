import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  makeStyles,
  Theme,
  createStyles,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr 1fr",
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr",
      },
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr",
      },
      [theme.breakpoints.down("xs")]: {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 1fr",
      },
    },
    firstBox: {
      background:
        "url(/images/plastic-bottle-caps-3735202.jpg) no-repeat center center scroll",
      backgroundSize: "cover",
      height: "100%",
      width: "auto",
      [theme.breakpoints.down("lg")]: {
        height: "100%",
        minHeight: "280px",
      },
    },
    secondBox: {
      background:
        "url(/images/Manufacturers-Wholesale-PVC-Blue-Regeneration-Plastic-Granule-PVC-Mold-Plastics-Extrusion13.png) no-repeat center center scroll",
      backgroundSize: "cover",
      height: "100%",
      width: "auto",
      [theme.breakpoints.down("lg")]: {
        width: "100%",
        minHeight: "280px",
      },
    },
    info: {
      width: "100%",
      minHeight: "450px",
      height: "auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateRows: "1fr",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 1fr",
      },
    },
    infoData: {
      gridColumn: "1 / 2",
      padding: "1.5em",
    },
    infoMap: {
      gridColumn: "2 / -1",
      background: "url(/images/map.png) no-repeat center center scroll",
      backgroundSize: "cover",
      height: "100%",
      width: "auto",
      [theme.breakpoints.down("sm")]: {
        gridColumn: "1 / 2",
      },
    },
  })
);

const Onama = () => {
  const classes = useStyles();

  return (
    <Container style={{ paddingBottom: "32px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h4"
            color="textSecondary"
            align="center"
            gutterBottom
          >
            O nama
          </Typography>
          <hr
            style={{ width: "200px", height: "5px", backgroundColor: "orange" }}
          />
          <Typography
            variant="h6"
            color="textSecondary"
            align="center"
            gutterBottom
          >
            Istorija duga vise od 3 decenije u proizvodnji plasticnih proizvoda
          </Typography>
        </Grid>
        {/* <Grid item container md={12} lg={12} spacing={5}> */}
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Paper elevation={3} style={{ padding: "2em" }}>
            <Typography
              variant="body1"
              color="textSecondary"
              align="left"
              gutterBottom
            >
              Osnivanjem zanatske radnje Hemoplast 1988 godine započinjemo
              preradu polimernih materijala brizganjem. Naš početak vezujemo za
              saradnju sa kompanijom PPU-Prvi Partizan Užice, gde proizvodimo
              program pozicija za njihov brend FASAU (Fabrika Sanitarnih
              Armatura Užice).
            </Typography>
            <br />
            <Typography
              variant="body1"
              color="textSecondary"
              align="left"
              gutterBottom
            >
              Kroz godine poslovanja i unapređivanje sopstvenog razvoja,
              Hemoplast proširuje proizvodnju na oblast Hidrauličkih
              fleksibilnih cevi i priključaka i sa holding kompanijom Fadip iz
              Bečeja razvija širok asortiman montažnih i zaštitnih pozicija
              neophodnih za izvozne programe Fadip IFC-a, zadovoljavajući
              najstrožije kvalitete. Izuzetno težak period naše zemlje na samom
              kraju devedesetih godina utiče i na poslovanje Hemoplast-a koje
              nakon reorganizacije menja ime u Imoplast.
            </Typography>
            <br />
            <Typography
              variant="body1"
              color="textSecondary"
              align="left"
              gutterBottom
            >
              Imoplast danas konkurenciju na tržištu osvaja savremenim metodama
              tržišnog komuniciranja i marketinškog predstavljanja domaćim i
              inostranim industrijama u zemlji. Proizvodni pogon sa instalisanim
              programskim mašinama visokih tehničkih mogućnosti i preciznosti
              proizvođača Klöckner Ferromatik Milacron, stručnost u tehnologiji
              prerade, kontrola ulaznih sirovina pri svakom procesu proizvodnje
              sa završnom tehničkom kontrolom kvaliteta proizvoda, čine Imoplast
              pouzdanim preduzećem sposobnim da proizvede najzahtevnije
              proizvode.
            </Typography>
            <br />
            <br />
            <Typography
              variant="body1"
              color="textSecondary"
              align="left"
              gutterBottom
            >
              S postovanjem, <br /> Marko Petrovic
            </Typography>
          </Paper>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={12}
          md={12}
          lg={4}
          className={classes.grid}
        >
          <Paper elevation={3} className={classes.firstBox}></Paper>
          <Paper elevation={3} className={classes.secondBox}></Paper>
        </Grid>
        <Grid item container md={12} lg={12}>
          <Paper elevation={3} className={classes.info}>
            <Box className={classes.infoData}>
              <Typography
                variant="h5"
                color="textSecondary"
                align="left"
                gutterBottom
                style={{ lineHeight: "300%" }}
              >
                Kako doci do nas?
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                align="left"
                gutterBottom
              >
                <b>Kontakt: </b>
                <br />
                imoplast@gmail.com <br /> +381 69 9999999 <br /> www.imoplast.rs
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                align="left"
                gutterBottom
              >
                <b>Adresa: </b>
                <br />
                37235 Trnavci bb, <br /> Opstina Aleksandrovac, <br /> Republika
                Srbija
              </Typography>
            </Box>
            <Box className={classes.infoMap}></Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Onama;
