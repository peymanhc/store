import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { GRAY } from "constants/colors";
import * as statements from "constants/statements";
import parse from "html-react-parser";
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 18,
    fontWeight: 400,
    color: GRAY,
    position: "relative",
    "&:before": {
      content: "''",
      background: "#2dcea2",
      width: 40,
      float: "right",
      height: 2,
      position: "absolute",
      top: 36,
    },
  },
  text: {
    marginTop: 30,
    color: GRAY,
    lineHeight: 2.3,
  },
}));
const ProductDescription = ({ text }) => {
  const classes = useStyles();
  const texts = statements.default;
  return (
    <Box>
      <Typography className={classes.title} variant="h3" component="h2">
        {texts.description}
      </Typography>
      <Typography className={classes.text} variant="h6" component="p">
        {parse(text)}
      </Typography>
    </Box>
  );
};

export default ProductDescription;
