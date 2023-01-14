import { makeStyles, Box } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    objectFit: "cover",
    width: "100%",
    borderRadius: 7,
  },
}));
const LightBanner = ({ link, height }) => {
  const classes = useStyles();
  return (
    <Box padding="0 10px">
      <img alt="banner" src={link} height={height} className={classes.root} />
    </Box>
  );
};

export default LightBanner;
