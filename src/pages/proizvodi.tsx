import React, { useEffect, useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  CssBaseline,
  List,
  ListItem,
  Chip,
} from "@material-ui/core";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
import Link from "next/link";
import CardProd from "../components/CardProduct";
import DoneIcon from "@material-ui/icons/Done";
import { getAsString } from "../getAsString";
import { useRouter } from "next/router";
import Router from "next/router";
import useSWR from "swr";
import { isProd } from "../partials/isProd";
import { getAllCategories } from "../partials/getAllCategories";
import { getAllProducts } from "../partials/getAllProducts";
import Product from "./proizvodi/[id]";
import { AnimatePresence } from "framer-motion";

export interface Product {
  product_id: string;
  name: string;
  description: string;
  image_src: string | null;
}

export interface ProductsProps {
  products: Product[];
  categories: string[];
}

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
      display: "grid",
      gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
      gridGap: theme.spacing(3),
      textDecoration: "none",
      [theme.breakpoints.down("xs")]: {
        padding: `24px 0`,
      },
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
    anchorTag: {
      textDecoration: "none",
    },
    container: {
      maxWidth: "1232px",
      margin: "auto",
    },
  })
);

const fetcher = (url) => fetch(url).then((r) => r.json());

const Proizvodi = ({ products, categories }: ProductsProps) => {
  const { query } = useRouter();
  const [initialValues] = useState({
    kategorija: getAsString(query.kategorija) || "Svi proizvodi",
  });

  const classes = useStyles();
  const [selectedCategory, setSelectedCategory] = React.useState<string>(
    initialValues.kategorija
  );

  const handleListItemClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
    // index: number
  ) => {
    if (event.currentTarget.classList.contains("MuiListItem-button")) {
      setSelectedCategory(
        (event.currentTarget.firstChild.firstChild as HTMLElement).innerText
      );
    }

    if (event.currentTarget.classList.contains("MuiChip-root")) {
      setSelectedCategory(
        (event.currentTarget.firstChild.nextSibling as HTMLElement).innerText
      );
    }
  };

  const { data } = useSWR(
    isProd + "/api/products?kategorija=" + query.kategorija,
    fetcher,
    {
      dedupingInterval: 60000,
      initialData: products,
    }
  );

  useEffect(() => {
    setSelectedCategory(initialValues.kategorija);
  }, []);

  useEffect(() => {
    Router.push({
      pathname: "/proizvodi",
      query: { kategorija: selectedCategory },
    });
  }, [selectedCategory]);

  return (
    <Box className={classes.container}>
      <Typography variant="h4" color="textSecondary" align="left" gutterBottom>
        Proizvodni asortiman
      </Typography>

      <div className={classes.root}>
        <CssBaseline />

        <div className={classes.categories}>
          <List>
            <ListItem
              button
              onClick={(event) => handleListItemClick(event)}
              selected={selectedCategory === "Svi proizvodi" ? true : false}
              divider
            >
              <ListItemText primary={"Svi proizvodi"} />
            </ListItem>
            {categories.map((text) => (
              <ListItem
                button
                key={text}
                onClick={(event) => handleListItemClick(event)}
                selected={selectedCategory === text ? true : false}
                divider
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.chips}>
          <Chip
            icon={<AddIcon />}
            color={
              selectedCategory === "Svi proizvodi" ? "secondary" : "default"
            }
            label="Svi proizvodi"
            onClick={(event) => handleListItemClick(event)}
            deleteIcon={
              selectedCategory === "Svi proizvodi" ? <DoneIcon /> : undefined
            }
          />
          {categories.map((chip) => (
            <Chip
              key={chip}
              icon={<AddIcon />}
              color={selectedCategory === chip ? "secondary" : "default"}
              label={chip}
              onClick={(event) => handleListItemClick(event)}
              deleteIcon={selectedCategory === chip ? <DoneIcon /> : undefined}
            />
          ))}
        </div>
        <main className={classes.content}>
          <AnimatePresence exitBeforeEnter>
            {data.map((p) => {
              return (
                <Link
                  href={"/proizvodi/[id]"}
                  as={`/proizvodi/${p.product_id}`}
                  key={p.product_id}
                >
                  <a className={classes.anchorTag}>
                    <CardProd product={p} />
                  </a>
                </Link>
              );
            })}
          </AnimatePresence>
        </main>
      </div>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const kategorija = getAsString(ctx.query.kategorija);

  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProducts(kategorija),
  ]);

  return { props: { categories, products } };
};

export default Proizvodi;
