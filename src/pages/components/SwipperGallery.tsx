import Hero from "./Hero";
import Swiper from "react-id-swiper";
import styles from "./swipperGallery.module.scss";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import {
  Typography,
  Box,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {},
  })
);

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    title: "Sky",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    title: "Orbit",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    title: "Space",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "/images/milacron-quantum-260.jpg",
    title: "Orbit",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
];

const Home = () => {
  const classes = useStyles();
  const [swiper, updateSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const params = {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 400,
  };

  return (
    <div className={styles.hero}>
      <Swiper getSwiper={updateSwiper} {...params}>
        <Box>
          <Hero src={images[0].original} />
        </Box>
        <Box>
          <Hero src={images[1].original} />
        </Box>
        <Box>
          <Hero src={images[2].original} />
        </Box>
        <Box>
          <Hero src={images[3].original} />
        </Box>
      </Swiper>

      <div className={styles.desc}>
        <div className={styles.button1} onClick={goNext}>
          <KeyboardArrowRightIcon fontSize="large" color="primary" />
        </div>
        <div className={styles.button2} onClick={goPrev}>
          <KeyboardArrowLeftIcon fontSize="large" color="primary" />
        </div>
        <div className={styles.item}>
          <Typography
            variant="body1"
            color="textSecondary"
            align="left"
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim in
            feugiat nisl gravida erat bibendum dolor.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Home;
