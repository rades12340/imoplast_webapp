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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bottomNav: {
      position: "fixed",
      zIndex: 1300,
      left: "8px",
      bottom: "8px",
      width: "calc(100% - 16px)",
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
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />

      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};

export default MyComp;
