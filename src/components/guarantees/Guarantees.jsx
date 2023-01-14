import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { WHITE, GRAY_5, GRAY } from "constants/colors";
// icons
import giftimg from "assets/gift.png";
import payimg from "assets/pay.png";
import returnmoneyimg from "assets/returnmoney.png";
import sendfreeimg from "assets/sendfree.png";
import tazminimg from "assets/tazmin.png";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    padding: 20,
    backgroundColor: WHITE,
    borderRadius: 5,
    border: `1px solid ${GRAY_5}`,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: GRAY,
    margin: "10px 0",
  },
  icon: {
    width: 50,
    height: 50,
  },
  text: {
    marginTop: 10,
    color: GRAY,
  },
}));

const Guarantees = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {guaranteeslist.map((item, i) => (
        <Grid item md={2} sm={6} xs={12} key={i} className={classes.wrapper}>
          <img className={classes.icon} alt={item.name} src={item.icon} />
          <Typography className={classes.text} variant="h6" component="h6">
            {item.name}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Guarantees;

const guaranteeslist = [
  {
    id: 0,
    name: "تضمین برگشت پول",
    icon: returnmoneyimg,
  },
  {
    id: 1,
    name: "دارای هدیه",
    icon: giftimg,
  },
  {
    id: 2,
    name: "ارسال رایگان کالا",
    icon: sendfreeimg,
  },
  {
    id: 3,
    name: "تضمین اصل بودن",
    icon: tazminimg,
  },
  {
    id: 4,
    name: "پرداخت امن",
    icon: payimg,
  },
];
