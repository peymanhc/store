import React from "react";
import { Box, makeStyles, Button } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { GRAY_5, RED, WHITE, GRAY, GREEN_2 } from "constants/colors";
import { Typography } from "@material-ui/core";
import * as statements from "constants/statements";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "20px",
    height: 150,
    backgroundColor: WHITE,
    borderTop: `1px solid ${GRAY_5}`,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      height: "auto",
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  product: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      margin: "auto",
      textAlign: "center",
      alignItems: "center",
    },
  },
  remove: {
    color: RED,
    fontSize: 30,
    "&:hover": {
      color: "#ab2e31",
      cursor: "pointer",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 25,
    },
  },
  image: {
    width: 100,
    height: 100,
    objectFit: "cover",
    margin: "0 30px",
    textAlign: "center",
    border: "1px solid rgba(0,0,0,0.05)",
    [theme.breakpoints.down("md")]: {
      margin: "30px 0",
      width: 150,
      height: 150,
    },
  },
  addTobasket: {
    backgroundColor: GREEN_2,
    color: WHITE,
    height: 40,
    width: 160,
    margin: "auto",
    "&:hover": {
      backgroundColor: GREEN_2,
    },
    [theme.breakpoints.down("md")]: {
      margin: "30px auto",
    },
  },
}));
const CardList = ({ name, image }) => {
  const text = statements.default;
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <HighlightOffIcon className={classes.remove} />
      <Box className={classes.wrapper}>
        <Box className={classes.product} flex={1}>
          <img className={classes.image} alt={name} src={image} />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <Typography
              variant="body2"
              component="span"
              style={{ color: GRAY }}
            >
              {text.productName}
            </Typography>
            <Typography variant="body1" component="span">
              {name}
            </Typography>
          </Box>
        </Box>
        <Button className={classes.addTobasket}>{text.addtobasket}</Button>
      </Box>
    </Box>
  );
};

export default CardList;
