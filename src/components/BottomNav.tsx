import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import React from "react";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Link from "next/link";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import InfoIcon from "@material-ui/icons/Info";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bottomNav: {
      position: "fixed",
      zIndex: 1300,
      left: 0,
      bottom: 0,
      width: "100%",
      height: "10vh",
      margin: "auto",
      borderRadius: "5px",
      boxShadow: "10px -4px -2px black",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  })
);

const MyComp = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.bottomNav}
    >
      <Link href="/">
        <BottomNavigationAction label="Poce" icon={<HomeIcon />} />
      </Link>
      <Link href="/proizvodi">
        <BottomNavigationAction label="Proi" icon={<ShoppingBasketIcon />} />
      </Link>
      <Link href="/o_nama">
        <BottomNavigationAction label="nama" icon={<InfoIcon />} />
      </Link>
      <Link href="/partneri">
        <BottomNavigationAction label="Partneri" icon={<PeopleAltIcon />} />
      </Link>
    </BottomNavigation>
  );
};

export default MyComp;
