import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Avatar,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: `48px 8px 24px`,
    },
    avatar: {
      backgroundColor: theme.palette.text.primary,
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: theme.spacing(2),
    },
    avatarHeader: {
      display: "flex",
      alignItems: "center",
    },
  })
);
const FourKeyParts = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Typography
            variant="h3"
            color="textSecondary"
            align="center"
            gutterBottom
          >
            Kvalitet na prvom mestu
          </Typography>
          <hr
            style={{ width: "200px", height: "5px", backgroundColor: "orange" }}
          />
          <Typography
            variant="body1"
            color="textSecondary"
            align="center"
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio purus
            ornare velit, suspendisse. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Odio purus ornare velit, suspendisse.
          </Typography>
        </Grid>
        <Grid item container lg={12} spacing={2}>
          <Grid item md={6} lg={6}>
            <Box>
              <Box className={classes.avatarHeader} py={2}>
                <Avatar className={classes.avatar}>
                  <AssignmentIcon />
                </Avatar>
                <Typography variant="h4" color="textSecondary" align="left">
                  Lorem ipsum dolor sit amet
                </Typography>
              </Box>
              <Typography variant="body1" color="textSecondary" align="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                purus ornare velit, suspendisse.
              </Typography>
            </Box>
            <Box>
              <Box className={classes.avatarHeader} py={2}>
                <Avatar className={classes.avatar}>
                  <AssignmentIcon />
                </Avatar>
                <Typography variant="h4" color="textSecondary" align="left">
                  Lorem ipsum dolor sit amet
                </Typography>
              </Box>
              <Typography variant="body1" color="textSecondary" align="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                purus ornare velit, suspendisse.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} lg={6}>
            <Box>
              <Box className={classes.avatarHeader} py={2}>
                <Avatar className={classes.avatar}>
                  <AssignmentIcon />
                </Avatar>
                <Typography variant="h4" color="textSecondary" align="left">
                  Lorem ipsum dolor sit amet
                </Typography>
              </Box>
              <Typography variant="body1" color="textSecondary" align="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                purus ornare velit, suspendisse.
              </Typography>
            </Box>
            <Box>
              <Box className={classes.avatarHeader} py={2}>
                <Avatar className={classes.avatar}>
                  <AssignmentIcon />
                </Avatar>
                <Typography variant="h4" color="textSecondary" align="left">
                  Lorem ipsum dolor sit amet
                </Typography>
              </Box>
              <Typography variant="body1" color="textSecondary" align="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                purus ornare velit, suspendisse.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FourKeyParts;
