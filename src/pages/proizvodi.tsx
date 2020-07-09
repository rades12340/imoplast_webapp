import React from "react";
import Drawer from "../components/Drawer";
import { Box, Typography } from "@material-ui/core";

const Proizvodi = ({ products }) => {
  return (
    <Box maxWidth="1280px" height="100%" margin="auto" padding="0 24px">
      <Typography variant="h4" color="textSecondary" align="left" gutterBottom>
        Proizvodni asortiman
      </Typography>
      <Drawer />
    </Box>
  );
};

export default Proizvodi;
