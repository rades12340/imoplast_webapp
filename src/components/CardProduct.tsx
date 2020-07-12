import React from "react";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: "inline-block",
      minWidth: 180,
      maxWidth: 280,
      margin: "0 2em 2em 0",
    },
    stepper: {
      width: "100%",
      flexGrow: 1,
    },
    actionArea: {
      osition: "relative",
      height: "100%",
      minHeight: "500px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "right",
    },
    header: {
      display: "flex",
      alignItems: "center",
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
    },
    img: {
      height: 255,
      display: "block",
      maxWidth: 400,
      overflow: "hidden",
      width: "100%",
    },
    media: {
      height: "240px",
      width: "100%",
    },
    props: {},
  });
});

interface ProductProps {
  product_id: number;
  name: string;
  image_src: string;
  description: string;
}

interface ProductPropsInterface {
  product: ProductProps;
}

const CardProd = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia
          className={classes.media}
          image={product.image_src}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={"/proizvodi/[id]"} as={`/proizvodi/${product.product_id}`}>
          <Button size="small" color="primary" style={{ marginLeft: "auto" }}>
            Detalji
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardProd;
