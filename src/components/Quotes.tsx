import React from "react";
import {
  Grid,
  Typography,
  Box,
  Avatar,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import CardQuote from "./CardQuote";
import Swiper from "react-id-swiper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      backgroundColor: "92doaf",
    },
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

const Quotes = () => {
  const classes = useStyles();

  const params = {
    // slidesPerView: 3,
    spaceBetween: 20,
    // centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };
  return (
    <div className={classes.body}>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Box p={2} width="100%">
            <Typography
              variant="h3"
              color="textSecondary"
              align="center"
              gutterBottom
            >
              Sta o nama kazu nasi partneri
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
        <Grid
          item
          lg={12}
          style={{
            width: "100%",
            maxWidth: "1800px",
            margin: "auto",
            overflow: "hidden",
          }}
        >
          <Swiper {...params}>
            <Box style={{ marginLeft: "10vw" }}>
              <CardQuote />
            </Box>
            <Box>
              <CardQuote />
            </Box>
            <Box>
              <CardQuote />
            </Box>
            <Box>
              <CardQuote />
            </Box>
          </Swiper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Quotes;
