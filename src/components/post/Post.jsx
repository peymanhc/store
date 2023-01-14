import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { WHITE } from "constants/colors";
import { GRAY, GRAY_4 } from "constants/colors";
import { BLUE_SHADOW } from "constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: 70,
    width: "100%",
    backgroundColor: WHITE,
    borderRadius: 5,
    boxShadow: BLUE_SHADOW,
    padding: 25,
  },
  title: {
    color: GRAY,
  },
  text: {
    color: GRAY_4,
    lineHeight: 2.5,
  },
  image: {
    width: "100%",
    borderRadius: 5,
    height: 550,
    objectFit: "cover",
    objectPosition: "center",
    margin: "40px 0",
    [theme.breakpoints.down("md")]: {
      height: 200,
      margin: "20px 0",
    },
  },
}));

const Post = ({ title, image, text }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h5" component="h1" className={classes.title}>
        {title}
      </Typography>
      <img className={classes.image} alt={title} src={image} />
      <Typography variant="h6" component="p" className={classes.text}>
      {text}
      </Typography>
    </Box>
  );
};

export default Post;
