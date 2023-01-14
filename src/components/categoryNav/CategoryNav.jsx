import React from "react";
import { Box, makeStyles, Typography, Divider } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { WHITE } from "constants/colors";
import { GRAY_4 } from "constants/colors";
import { BLUE_SHADOW } from "constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: 55,
    width: "100%",
    backgroundColor: WHITE,
    borderRadius: 5,
    boxShadow:BLUE_SHADOW
  },
  homeicon: {
    color: GRAY_4,
    fontSize: 24,
    margin: "0 20px",
  },
  title: {
    color: GRAY_4,
    marginLeft: 20,
  },
}));

const CategoryNav = ({ categoryaddress }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <HomeIcon className={classes.homeicon} />
      <Divider orientation="vertical" flexItem />
      <Typography variant="body2" component="h6" className={classes.title}>
        {categoryaddress}
      </Typography>
    </Box>
  );
};

export default CategoryNav;
