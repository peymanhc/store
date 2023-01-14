import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { WHITE, GRAY_4, BLACK, GRAY_3, GREEN_2, GRAY } from "constants/colors";
// icons
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import * as statements from "constants/statements";
import { GRAY_6 } from "constants/colors";
const useStyles = makeStyles({
  root: {
    height: 400,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    padding: "15px",
    cursor: "pointer",
    position: "relative",
    boxShadow: "0 0 10px 0 rgba(0,0,0,.15) !important",
    "&:hover": {
      backgroundColor: WHITE,
    },
  },
  image: {
    height: 180,
    objectFit: "cover",
  },
  title: {
    color: GRAY_4,
    marginBottom: 15,
    direction: "ltr",
    textAlign: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
  },
  actionArea: {
    display: "flex",
    justifyContent: "space-between",
    direction: "ltr",
    width: "100%",
  },
  discount_oval: {
    width: 45,
    height: 45,
    fontSize: 14,
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
    left: 20,
    top: 20,
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
  actionButton: {
    color: GRAY,
    backgroundColor: GRAY_6,
    width: 40,
    height: 40,
    marginLeft: 10,
    "&:hover": {
      backgroundColor: GREEN_2,
      color: WHITE,
    },
  },
  greenbtn: {
    backgroundColor: GREEN_2,
    color: WHITE,
    margin: 0,
    "&:hover": {
      backgroundColor: GRAY_6,
      color: GRAY,
    },
  },
  actionicon: {
    fontSize: 22,
  },
});

export default function Card3({
  image,
  title,
  discount,
  priceDel,
  price_val,
  id,
  remained_value,
}) {
  const classes = useStyles();
  const text = statements.default;
  return (
    <Card className={classes.root}>
      <Typography
        className={classes.discount_oval}
        variant="body1"
        component="p"
      >
        {discount}%
      </Typography>
      <Link style={{ flex: 1 }} to={`/product/${id}`}>
        <Box>
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
      <CardActions style={{ flexDirection: "column" }}>
        <Box className={classes.actionArea}>
          <Box id="price">
            <del className={classes.price_del}>{priceDel}</del>
            <Typography
              className={classes.price_val}
              variant="body1"
              component="p"
            >
              {price_val}
              <span className={classes.price_currency}>{text.currency}</span>
            </Typography>
          </Box>
          <Box id="price">
            <Typography
              variant="body1"
              component="span"
              style={{ color: GRAY }}
            >
              {remained_value}
            </Typography>
            <Typography variant="body1" component="p" style={{ color: GRAY }}>
              فروش
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          marginTop="20px"
        >
          <Box>
            <Tooltip placement="top" title="علاقه مندی به محصول">
              <IconButton className={classes.actionButton}>
                <FavoriteBorderIcon className={classes.actionicon} />
              </IconButton>
            </Tooltip>
            <Tooltip placement="top" title="مقایسه این محصول">
              <IconButton className={classes.actionButton}>
                <CompareArrowsIcon className={classes.actionicon} />
              </IconButton>
            </Tooltip>
            <Tooltip placement="top" title="مشاهده سریع محصول">
              <IconButton className={classes.actionButton}>
                <SearchIcon className={classes.actionicon} />
              </IconButton>
            </Tooltip>
          </Box>
          <IconButton className={clsx(classes.actionButton, classes.greenbtn)}>
            <ShoppingBasketIcon className={classes.actionicon} />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}
