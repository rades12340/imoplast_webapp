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
        gridTemplateRows: "40% 1fr",
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

interface ProductProps {
  product_id: number;
  name: string;
  image_src: string;
  description: string;
}

interface ProductPropsInterface {
  product: ProductProps;
}

const Product = ({ product }: ProductPropsInterface) => {
  const classes = useStyles();
  const router: NextRouter = useRouter();
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running

  if (router.isFallback) {
    return <h1>Loading</h1>;
  }

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
            "20px 20px 60px 60px rgba(0,0,0,0.35) inset, -20px -2px 60px 60px rgba(0,0,0,0.35) inset",
        }}
      >
        <Link
          onClick={(e) => {
            e.preventDefault();
            router.back();
          }}
          style={{
            color: "white",
            position: "absolute",
            left: "1.5em",
            top: "1.5em",
            cursor: "pointer",
            fontSize: "1.3em",
            display: "flex",
          }}
        >
          <ArrowBackIosIcon /> Nazad
        </Link>
      </div>
      <div className={classes.desc}>
        <Typography
          variant="h6"
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
    paths: params,
    fallback: true,
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
