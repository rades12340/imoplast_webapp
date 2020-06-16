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
import AssignmentIcon from "@material-ui/icons/Assignment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: `48px 0`,
    },
    avatar: {
      backgroundColor: theme.palette.text.primary,
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: theme.spacing(2),
    },
    numbers: {
      display: "grid",
      placeItems: "center",
    },
  })
);

const OurNumbers = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Box m={1}>
            <Typography
              variant="h3"
              color="textSecondary"
              align="center"
              gutterBottom
            >
              Brojevi koje smo postigli
            </Typography>
            <hr
              style={{
                width: "200px",
                height: "5px",
                backgroundColor: "orange",
                textAlign: "center",
              }}
            />
          </Box>
        </Grid>
        <Grid item container lg={12} spacing={2}>
          <Grid item sm={12} md={6} lg={3}>
            <Box>
              <Box className={classes.numbers} py={2} m={1}>
                <Typography
                  variant="h4"
                  color="textSecondary"
                  align="center"
                  gutterBottom
                >
                  1000000
                </Typography>
                <Typography variant="body1" color="textSecondary" align="left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                  purus ornare velit, suspendisse.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <Box>
              <Box className={classes.numbers} py={2} m={1}>
                <Typography
                  variant="h4"
                  color="textSecondary"
                  align="left"
                  gutterBottom
                >
                  1000000
                </Typography>
                <Typography variant="body1" color="textSecondary" align="left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                  purus ornare velit, suspendisse.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <Box>
              <Box className={classes.numbers} py={2} m={1}>
                <Typography
                  variant="h4"
                  color="textSecondary"
                  align="left"
                  gutterBottom
                >
                  1000000
                </Typography>
                <Typography variant="body1" color="textSecondary" align="left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                  purus ornare velit, suspendisse.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <Box>
              <Box className={classes.numbers} py={2} m={1}>
                <Typography
                  variant="h4"
                  color="textSecondary"
                  align="left"
                  gutterBottom
                >
                  1000000
                </Typography>
                <Typography variant="body1" color="textSecondary" align="left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                  purus ornare velit, suspendisse.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurNumbers;
