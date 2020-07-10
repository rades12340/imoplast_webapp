import React from "react";
import Drawer from "../components/Drawer";
import { Box, Typography } from "@material-ui/core";
import { GetServerSideProps } from "next";
import fetch from "isomorphic-fetch";

const Proizvodi = ({ products }) => {
  return (
    <Box maxWidth="1280px" height="100%" margin="auto" padding="0 24px">
      <Typography variant="h4" color="textSecondary" align="left" gutterBottom>
        Proizvodni asortiman
      </Typography>

      <Drawer products={products} />
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
