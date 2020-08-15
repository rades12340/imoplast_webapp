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
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bottomNav: {
      position: "fixed",
      zIndex: 1300,
      left: 0,
      bottom: 0,
      width: "100%",
      height: "10vh",
      maxHeight: "63px",
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
    active: {
      color: "orange",
    },
  })
);

const MyComp = () => {
  const router = useRouter();
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
        <BottomNavigationAction
          showLabel
          label="Pocetak"
          icon={<HomeIcon />}
          className={router.pathname === "/" ? classes.active : ""}
        />
      </Link>
      <Link href="/proizvodi?kategorija=Svi proizvodi">
        <BottomNavigationAction
          showLabel
          label="Proizvodi"
          icon={<ShoppingBasketIcon />}
          className={router.pathname === "/proizvodi" ? classes.active : ""}
        />
      </Link>
      <Link href="/o_nama">
        <BottomNavigationAction
          showLabel
          label="O nama"
          icon={<InfoIcon />}
          className={router.pathname === "/o_nama" ? classes.active : ""}
        />
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
