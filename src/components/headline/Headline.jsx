import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { BLACK } from "constants/colors";
import { RED } from "constants/colors";
import { GRAY_5 } from "constants/colors";

const useStyles = makeStyles({
  root: {
    "-webkit-box-pack": "justify",
    "-ms-flex-pack": "justify",
    justifyContent: "space-between",
    margin: "15px ",
    position: "relative",
    paddingLeft: 5,
    position: "relative",
    "&:after": {
      position: "absolute",
      bottom: -7,
      right: 20,
      left: 200,
      backgroundColor: GRAY_5,
      height: 1,
      content: "''",
      zIndex: 0,
    },
  },
  hTitle: {
    padding: "8px 0",
    lineHeight: "31px",
    position: "relative",
    margin: "0 0 6px 33px",
    position: "relative",
    paddingLeft: 5,
    fontWeight: 800,
    color: BLACK,
    "&:before": {
      content: "''",
      position: "absolute",
      right: -30,
      left: 0,
      display: "flex",
      bottom: 0,
      backgroundColor: RED,
      height: 1,
      zIndex: 1,
    },
  },
});
const Headline = ({title}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.hTitle} variant="h5" component="span">
        {title}
      </Typography>
    </Box>
  );
};

export default Headline;
