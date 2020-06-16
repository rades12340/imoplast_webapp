import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Avatar,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      position: "relative",
      maxWidth: "280px",
      padding: "1rem",
    },
    avatar: {
      width: 120,
      height: 120,
      marginBottom: theme.spacing(2),
    },
    icon: {
      position: "absolute",
      top: 0,
      right: 0,
      fontSize: "220px",
      transform: "translate(21%, -29%)",
      color: "lightgreen",
    },
  })
);

export default () => {
  const classes = useStyles();
  return (
    <Card className={classes.card} elevation={2}>
      <CardContent>
        <Avatar
          src="https://randomuser.me/api/portraits/men/21.jpg"
          className={classes.avatar}
        />
        <Typography variant="h5" color="textSecondary">
          Marko Petrovic
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Lorem ipsum dolor sit.
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          est fugiat, dicta cumque recusandae nihil earum. Assumenda doloremque
          enim minus, quisquam a quaerat cumque, consequuntur, aliquid et alias
          sequi porro.
        </Typography>
      </CardContent>
      <CardActions>
        <FacebookIcon fontSize="large" color="primary" />
      </CardActions>
      <FormatQuoteIcon className={classes.icon} />
    </Card>
  );
};
