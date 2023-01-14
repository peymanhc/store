import React from "react";
import { Box, makeStyles, Typography, Grid } from "@material-ui/core";
import { GRAY_4, GRAY_3 } from "constants/colors";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  name: {
    color: GRAY_4,
    margin: "5px 0",
  },
  description: {
    color: GRAY_3,
    margin: "5px 0",
  },
  star: {
    margin: "5px 0",
    fontSize: 20,
  },
}));
const ProductTitle = ({ name, description, rate }) => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h5" component="h4" className={classes.name}>
        {name}
      </Typography>
      <Typography
        variant="body2"
        component="h5"
        className={classes.description}
      >
        {description}
      </Typography>
      <Rating readOnly value={rate} className={classes.star} />
    </Box>
  );
};

export default ProductTitle;
