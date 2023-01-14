import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 250,
    objectFit: "cover",
    borderRadius: 20,
    cursor: "pointer",
    pointerEvents:"all"
  },
}));
const CategoryImage = ({ url }) => {
  const classes = useStyles();
  return <img className={classes.root} alt={"category"} src={url} />;
};

export default CategoryImage;
