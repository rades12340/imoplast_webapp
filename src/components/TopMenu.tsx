import React, { useEffect, useState } from "react";
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { Button, Container } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    media: {
      maxHeight: "40px",
      height: "7vh",
      width: "auto",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      zIndex: theme.zIndex.drawer + 1,
      marginRight: "auto",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    appBar: {
      backgroundColor: "transparent",
      color: "rgb(20, 51, 2)",
      height: "10vh",
      maxHeight: "58px",
      transition: "all ease 0.25s",
    },
    active: {
      boxSizing: "border-box",
      borderBottom: `4px solid ${theme.palette.text.primary}`,
    },
    scroll: {
      top: 0,
      width: "100%",
      height: "65px",
      backgroundColor: "transparent",
      backdropFilter: "blur(5px)",
      color: theme.palette.text.secondary,
      transition: "backdrop-filter background-color ease 0.25s",
    },
    toolbar: {
      position: "relative",
      padding: "10px 0px",
      width: "100%",
      maxWidth: "1280px",
      paddingLeft: "16px",
      paddingRight: "16px",
      margin: "auto",
    },
  })
);

export default function PrimarySearchAppBar() {
  const router = useRouter();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);
  const [listener, setListener] = useState(null);
  const [scroll, setScroll] = useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    const element = document.addEventListener("scroll", (e) => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 70) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
    setListener(element);
  }, []);

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <BookmarkIcon />
          </Badge>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <Container className={classes.grow}>
      <AppBar
        position="fixed"
        elevation={scroll ? 2 : 0}
        className={!scroll ? classes.appBar : classes.scroll}
        style={{ left: 0, top: 0 }}
      >
        <Toolbar className={classes.toolbar}>
          <img
            className={classes.media}
            src="/images/logo.png"
            title="Immoplast nameski proizvodi od plastike"
            style={{ marginLeft: "auto" }}
          />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link href="/">
              <Button
                color="inherit"
                className={router.pathname === "/" ? classes.active : ""}
              >
                Početna strana
              </Button>
            </Link>
            <Link href="/proizvodi?kategorija=Svi proizvodi">
              <Button
                color="inherit"
                className={
                  router.pathname === "/proizvodi" ? classes.active : ""
                }
              >
                Proizvodi
              </Button>
            </Link>
            <Link href="/o_nama">
              <Button
                color="inherit"
                className={router.pathname == "/o_nama" ? classes.active : ""}
              >
                O nama
              </Button>
            </Link>

            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <BookmarkIcon fontSize="large" />
              </Badge>
            </IconButton>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Badge badgeContent={4} color="secondary">
                <BookmarkIcon fontSize="large" />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </Container>
  );
}
