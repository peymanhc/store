import { Box, makeStyles } from "@material-ui/core";
import { GRAY_5 } from "constants/colors";
import React from "react";
import img1 from "assets/testProduct.jpg";
import img2 from "assets/testProduct2.jpg";
import { WHITE } from "constants/colors";
import { GREEN_2 } from "constants/colors";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 5,
    marginBottom: 10,
    position: "relative",
  },
  wrapper: {
    width: "100%",
    border: `1px solid ${GRAY_5}`,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
    objectFit: "cover",
    cursor: "pointer",
    pointerEvents: "all",
  },
  gallery: {
    width: "100%",
    height: 80,
    border: `1px solid ${GRAY_5}`,
    padding: "5px",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTop: "none",
    display: "flex",
    justifyContent: "flex-start",
  },
  imageGallery: {
    maxWidth: 100,
    height: "100%",
    objectFit: "cover",
    position: "relative",
    overflowX: "scroll",
    cursor: "pointer",
    pointerEvents: "all",
  },
  discount: {
    width: 60,
    height: 60,
    fontSize: 18,
    color: WHITE,
    background: GREEN_2,
    borderRadius: "100% 50% 50% 100%/75% 69% 69% 75%",
    fontWeight: "bold",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    right: -20,
    top: 20,
  },
}));
const ProductGallery = ({gallery,discount}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.discount}>{discount}%</Box>
      <Box className={classes.wrapper}>
        <img className={classes.image} alt="product" src={gallery[0]} />
      </Box>
      <Box className={classes.gallery}>
        {gallery.slice(1,6).map((item,i)=>(
          <img className={classes.imageGallery} alt="product" src={gallery[i]} />
        ))}
      </Box>
    </Box>
  );
};

export default ProductGallery;
