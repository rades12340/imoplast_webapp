import React from "react";
import { useRouter, NextRouter } from "next/router";
import { GetStaticProps } from "next";
import fetch from "isomorphic-fetch";
import Link from "@material-ui/core/Link";
import {
  Box,
  Typography,
  Paper,
  Grid,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 1fr",
      },
    },
    image: {},
    desc: {
      display: "flex",
      justifyContent: "center",
      alignItems: "left",
      flexDirection: "column",
      padding: theme.spacing(3),
    },
  })
);

const Product = ({ product }: any) => {
  const classes = useStyles();
  const router: NextRouter = useRouter();
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running

  return (
    <div className={classes.root}>
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "auto",
          background: `url(${product.image_src}) no-repeat center center scroll`,
          backgroundSize: "cover",
          boxShadow:
            "28px 29px 60px 60px rgba(0,0,0,0.75) inset, -28px -29px 60px 60px rgba(0,0,0,0.75) inset",
        }}
      >
        <Link
          onClick={(e) => {
            e.preventDefault();
            router.push("/proizvodi");
          }}
          style={{
            color: "white",
            position: "absolute",
            left: "2em",
            top: "2em",
            cursor: "pointer",
            fontSize: "1.5em",
            display: "flex",
          }}
        >
          <ArrowBackIosIcon /> Back
        </Link>
      </div>
      <div className={classes.desc}>
        <Typography
          variant="h4"
          color="textSecondary"
          align="left"
          gutterBottom
        >
          {product.name}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          align="left"
          gutterBottom
        >
          {product.description}
        </Typography>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const isProd =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://imoplast-webapp.vercel.app";
  const res = await fetch(`${isProd}/api/products`);
  const products = await res.json();

  const params = products.map((p) => ({
    params: { id: p.product_id.toString() },
  }));
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: params,
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const isProd =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://imoplast-webapp.vercel.app";
  const res = await fetch(`${isProd}/api/products/${params.id}`);
  const product = await res.json();
  return { props: { product: product[0] } };
};

export default Product;
