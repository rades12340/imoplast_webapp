import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Paper, createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      maxWidth: "1000px",
      padding: "24px",
      display: "grid",
      justifyContent: "center",
      gridGap: "24px",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 320px))",
      gridAutoRows: "minmax(350px, 400px)",
    },
    partnerCard: {
      position: "relative",
    },
    heroImg: {
      background:
        "url(/images/plastic-bottle-caps-3735202.jpg) no-repeat center center scroll",
      backgroundSize: "cover",
      height: "80%",
      width: "100%",
    },
    compName: {
      height: "20%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

export default function Partneri() {
  const styles = useStyles();
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Nasi poslovni partneri
        </Typography>
        <Typography variant="body1" component="h1" gutterBottom>
          U dugogodisnjoj istoriji nase firme postigli smo odlicni saradnju sa
          mnogim poznatim poslodavcima u nasoj zemlji i zato smo izuzetno
          ponosni da mozemo da istaknemo neke od njh
        </Typography>
      </Box>
      <Paper className={styles.paper}>
        <Box className={styles.partnerCard}>
          <Box className={styles.heroImg}></Box>
          <Box className={styles.compName}>
            <Typography variant="h5" align="center" gutterBottom>
              Мilacron doo
            </Typography>
          </Box>
        </Box>
        <Box className={styles.partnerCard}>
          <Box className={styles.heroImg}></Box>
          <Box className={styles.compName}>
            <Typography variant="h5" align="center" gutterBottom>
              Мilacron doo
            </Typography>
          </Box>
        </Box>
        <Box className={styles.partnerCard}>
          <Box className={styles.heroImg}></Box>
          <Box className={styles.compName}>
            <Typography variant="h5" align="center" gutterBottom>
              Мilacron doo
            </Typography>
          </Box>
        </Box>
        <Box className={styles.partnerCard}>
          <Box className={styles.heroImg}></Box>
          <Box className={styles.compName}>
            <Typography variant="h5" align="center" gutterBottom>
              Мilacron doo
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
