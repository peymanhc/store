import React, { useState } from "react";
import { Box, makeStyles, Typography, Button } from "@material-ui/core";
// colors
import { WHITE, GRAY_5, GRAY } from "constants/colors";
import { GREEN_2 } from "constants/colors";
// components
import DeadlineCount from "components/deadLine/DeadlineCount";
import NumberInput from "components/numberInput/NumberInput";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import * as statements from "constants/statements";
import { GRAY_6 } from "constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: 55,
    padding: 25,
    width: "100%",
    backgroundColor: GRAY_6,
    borderRadius: 5,
    textAlign: "left",
    [theme.breakpoints.down("xs")]:{
      padding: "10px 3px",
    },
  },
  currency: {
    float: "right",
    width: "100%",
    textAlign: "center",
    marginBottom: 0,
    marginTop: 0,
    padding: 20,
    borderRadius: 5,
    position: "relative",
    boxSizing: "border-box",
    background: WHITE,
    maxHeight: 140,
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    "&:before": {
      content: "''",
      width: 20,
      height: 20,
      background: GRAY_6,
      position: "absolute",
      right: -10,
      borderRadius: 90,
      marginTop: 17,
    },
    "&:after": {
      content: "''",
      width: 20,
      height: 20,
      background: GRAY_6,
      position: "absolute",
      left: -10,
      borderRadius: 90,
      marginTop: 17,
    },
  },
  deadline: {
    borderRadius: "50%",
    width: 45,
    height: 45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
  secondsClass: {
    backgroundColor: GREEN_2,
    color: "white",
  },
  deadlinetext: {
    textAlign: "center",
    color: GRAY,
    margin: "10px 0",
  },
  numberInputBtn: {
    margin: "0 10px",
  },
  purchases: {
    backgroundColor: GREEN_2,
    color: WHITE,
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: GREEN_2,
    },
    [theme.breakpoints.down("xs")]:{
      marginTop:15
    },
  },
  purchasebox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    marginTop: "15px",
    [theme.breakpoints.down("xs")]:{
      flexDirection:"column"
    },
  },
}));
const ProductSeller = ({ deadlineTime, lastprice, price }) => {
  const classes = useStyles();
  const [deadLine, setdeadLine] = useState(deadlineTime);
  const text = statements.default;

  return (
    <Box className={classes.root}>
      <Box style={{ marginBottom: 15 }}>
        <DeadlineCount
          deadline={deadLine}
          class={classes.deadline}
          secondsClass={classes.secondsClass}
        />
        <Box display="flex" width="100%" justifyContent="space-around">
          <Box display="flex" alignItems="center">
            <Typography
              variant="body1"
              component="span"
              className={classes.deadlinetext}
            >
              ثانیه
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography
              variant="body1"
              component="span"
              className={classes.deadlinetext}
            >
              دقیقه
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography
              variant="body1"
              component="span"
              className={classes.deadlinetext}
            >
              ساعت
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography
              variant="body1"
              component="span"
              className={classes.deadlinetext}
            >
              روز
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.currency}>
        <Box
          width="50%"
          display="flex"
          flexDirection="column"
          borderRight={`1px solid ${GRAY_5}`}
        >
          <Typography variant="h6" component="h5">
            {text.lastprice}
          </Typography>
          <Typography variant="body1" component="h6" style={{ marginTop: 10 }}>
            {`${lastprice} ${text.currency}`}
          </Typography>
        </Box>
        <Box width="50%" display="flex" flexDirection="column">
          <Typography variant="h6" component="h5">
          {text.newprice}
          </Typography>
          <Typography
            variant="body1"
            component="h6"
            style={{ color: GREEN_2, marginTop: 10 }}
          >
            {`${price} ${text.currency}`}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.purchasebox}>
        <NumberInput min={0} max={15} className={classes.numberInputBtn} />
        <Button className={classes.purchases}>
          <ShoppingBasketIcon style={{ marginLeft: 10 }} />
          {text.addtobasket}
        </Button>
      </Box>
    </Box>
  );
};

export default ProductSeller;
