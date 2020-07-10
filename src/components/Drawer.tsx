import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import CardProduct from "./CardProduct";
import Chip from "@material-ui/core/Chip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";

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

export default function ClippedDrawer({ products }: any) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
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
          <Chip
            key={chip}
            icon={<AddIcon />}
            label={chip}
            onClick={handleClick}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <main className={classes.content}>
        {products.map((p) => {
          return <CardProduct key={p.product_id} product={p} />;
        })}
      </main>
    </div>
  );
}
