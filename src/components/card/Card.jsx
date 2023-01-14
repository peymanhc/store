import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import DeadlineCount from "components/deadLine/DeadlineCount";
import { WHITE, GRAY_4, RED, BLACK, GRAY_3, GRAY } from "constants/colors";
import * as statements from "constants/statements";

const useStyles = makeStyles({
  root: {
    height: 450,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    padding: "5px",
    "&:hover": {
      backgroundColor: WHITE,
    },
    cursor: "pointer",
  },
  image: {
    height: 190,
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
    padding: "4px 6px 1px",
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
    fontSize: 16,
    lineHeight: 1.375,
    marginLeft: 8,
    minWidth: 43,
    height: 23,
  },
  price_del: {
    fontSize: "1.143rem",
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
    fontSize: "20px",
    lineHeight: 1.1,
    direction: "ltr",
  },
  price_currency: {
    fontWeight: 400,
    fontSize: 14,
    marginLeft: 5,
  },
  remained_value: {
    fontSize: 13,
    lineHeight: 1.571,
    color: RED,
    marginRight: 5,
  },
  remained_phrase: {
    display: "inline-block",
    fontSize: 13,
    lineHeight: "1.833",
    color: GRAY,
    direction: "rtl",
  },
  timer: {
    fontSize: "1rem",
    lineHeight: 1.571,
    color: GRAY,
    display: "flex",
    alignItems: "center",
  },
});

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 5,
    borderRadius: 5,
    margin: "15px 0",
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#fe506c",
  },
}))(LinearProgress);

export default function CardBox({
  image,
  title,
  discount,
  priceDel,
  price_val,
  remained_value,
  deadLine,
  id,
}) {
  const classes = useStyles();
  const [carddeadline, setcarddeadline] = useState(deadLine);
  const text = statements.default;
  return (
    <Card className={classes.root}>
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
            <Typography className={classes.title} variant="h6" component="h2">
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
        <BorderLinearProgress
          aria-label={remained_value}
          style={{ width: "100%" }}
          variant="determinate"
          value={remained_value}
        />

        <Box dir="rtl" width="100%">
          <span className={classes.remained_value}>{remained_value}%</span>
          <span className={classes.remained_phrase}>{text.sold}</span>
        </Box>
        <Box className={classes.timer}>
          <QueryBuilderIcon style={{ fontSize: 13 }} />
          <span className={classes.remained_phrase}>
            <DeadlineCount deadline={carddeadline} />
          </span>
        </Box>
      </CardActions>
    </Card>
  );
}
