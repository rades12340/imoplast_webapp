import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import React from "react";
import Link from "next/link";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import InfoIcon from "@material-ui/icons/Info";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { orange } from "@material-ui/core/colors";

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
    selected: {
      backgroundColor: orange.A700,
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
      showLabels={true}
      className={classes.bottomNav}
    >
      <Link href="/">
        <BottomNavigationAction showLabel label="Pocetak" icon={<HomeIcon />} />
      </Link>
      <Link href="/proizvodi">
        <BottomNavigationAction
          showLabel
          label="Proizvodi"
          icon={<ShoppingBasketIcon />}
        />
      </Link>
      <Link href="/o_nama">
        <BottomNavigationAction showLabel label="O nama" icon={<InfoIcon />} />
      </Link>
      {/* <Link href="/partneri">
        <a>
          <BottomNavigationAction
            showLabel
            label="Partneri"
            icon={<PeopleAltIcon />}
            classes={{ selected: classes.selected }}
          />
        </a>
      </Link> */}
    </BottomNavigation>
  );
};

export default MyComp;
