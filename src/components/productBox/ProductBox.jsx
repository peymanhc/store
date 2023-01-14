import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { WHITE,GRAY_4,RED,BLACK,GRAY_3 } from "constants/colors";
import { Link } from "react-router-dom";
import * as statements from "constants/statements";

const useStyles = makeStyles({
  root: {
    height: 320,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    padding: "5px",
    transition: "0.2s",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 0 10px 0 rgba(0,0,0,.15)",
      backgroundColor: WHITE,
      transform: "translateY(-2px)",
      transition: "0.2s",
    },
  },
  image: {
    height: 150,
    objectFit: "cover",
  },
  title: {
    color: GRAY_4,
    marginBottom: 15,
    direction: "ltr",
  },
  actionArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  discount_oval: {
    backgroundColor: RED,
    fontWeight: 700,
    color: WHITE,
    borderRadius: "20px",
    padding: "3px 5px 1px",
    letterSpacing: 0,
    marginBottom: 3,
    display: "-webkit-box",
    display: "-ms-flexbox",
    display: "flex",
    "-webkit-box-align": "center",
    "-ms-flex-align": "center",
    alignItems: "center",
    "-webkit-box-pack": "center",
    "-ms-flex-pack": "center",
    justifyContent: "center",
    fontSize: 14,
    lineHeight: 1.375,
    marginLeft: 8,
    minWidth: 43,
    height: 23,
  },
  price_del: {
    fontSize: 13,
    lineHeight: "28px",
    display: "block",
    letterSpacing: ".5px",
    color: GRAY_3,
    textDecoration: "line-through",
  },
  price_val: {
    color: BLACK,
    letterSpacing: 0,
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 1.1,
    direction: "ltr",
  },
  price_currency: {
    fontWeight: 400,
    fontSize: 12,
    marginLeft: 5,
  },
  "@global": {
    ".MuiPaper-elevation1": {
      boxShadow: "none",
    },
  },
});

export default function ProductBox({
  image,
  title,
  discount,
  priceDel,
  price_val,
  id,
}) {
  const classes = useStyles();
  const text = statements.default;
  return (
    <Card className={classes.root}>
      <Link style={{ flex: 1 }} to={`/product/${id}`}>
        <Box > 
          <CardMedia
            component="img"
            alt="product"
            className={classes.image}
            image={image}
            title="product"
          />
          <CardContent>
            <Typography
              className={classes.title}
              variant="body1"
              component="h2"
            >
              {title}
            </Typography>
          </CardContent>
        </Box>
      </Link>
      <CardActions className={classes.actionArea}>
        <Box display="flex">
          <Typography
            className={classes.discount_oval}
            variant="body1"
            component="p"
          >
            {discount}%
          </Typography>
          <del className={classes.price_del}>{priceDel}</del>
        </Box>
        <Typography className={classes.price_val} variant="body1" component="p">
          {price_val}
          <span className={classes.price_currency}>{text.currency}</span>
        </Typography>
      </CardActions>
    </Card>
  );
}
