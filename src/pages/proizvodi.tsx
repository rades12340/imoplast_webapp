import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  CssBaseline,
  List,
  ListItem,
  Chip,
} from "@material-ui/core";
import { GetServerSideProps } from "next";
import fetch from "isomorphic-fetch";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
import Link from "next/link";
import CardProd from "../components/CardProduct";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },
    chips: {
      display: "none",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        "& > *": {
          margin: theme.spacing(0.5),
        },
      },
    },
    categories: {
      width: "100%",
      maxWidth: 240,
      marginTop: theme.spacing(3),
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      position: "static",
      minHeight: "90vh",
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flex: 1,
      padding: theme.spacing(3),
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
    },
    details: {
      alignItems: "center",
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: theme.spacing(0, 0, 0, 1),
    },
    subheader: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    borderLeft: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      margin: theme.spacing(0, 2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

const Proizvodi = ({ products }) => {
  const classes = useStyles();
  return (
    <Box maxWidth="1280px" height="100%" margin="auto" padding="0 24px">
      <Typography variant="h4" color="textSecondary" align="left" gutterBottom>
        Proizvodni asortiman
      </Typography>

      <div className={classes.root}>
        <CssBaseline />

        <div className={classes.categories}>
          <List>
            {[
              "Svi proizvodi",
              "Montaža i zaštita hidrauličkih creva i priključaka",
              "Hidrauličke Armature",
              "Sanitarne Armature",
              "Elektroinstalacije",
              "Ciklon vazduha Lomardini",
            ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.chips}>
          {[
            "Svi proizvodi",
            "Montaža i zaštita hidrauličkih creva i priključaka",
            "Hidrauličke Armature",
            "Sanitarne Armature",
            "Elektroinstalacije",
            "Ciklon vazduha Lomardini",
          ].map((chip) => (
            <Chip key={chip} icon={<AddIcon />} label={chip} />
          ))}
        </div>
        <main className={classes.content}>
          {products.map((p) => {
            return (
              <Link
                href={"/proizvodi/[id]"}
                as={`/proizvodi/${p.product_id}`}
                key={p.product_id}
              >
                <a>
                  <CardProd product={p} />;
                </a>
              </Link>
            );
          })}
        </main>
      </div>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const isProd =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://imoplast-webapp.vercel.app";
  const res = await fetch(`${isProd}/api/products`);
  const data = await res.json();
  return { props: { products: data } };
};

export default Proizvodi;
