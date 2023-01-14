import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  ListItem,
  ListItemText,
  Container,
  Typography,
  Link,
  Box,
} from "@material-ui/core";
import { SHADOW_1, BLACK, GRAY_2, WHITE } from "constants/colors";
import footerItems from "constants/footeritems";
// icons
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import TvIcon from "@material-ui/icons/Tv";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import enamad from "assets/enamad.jpg";
import samandehi from "assets/samandehi.png";
import { GRAY } from "constants/colors";
import { GRAY_6 } from "constants/colors";

function Copyright() {
  return (
    <Typography style={{ marginTop: 20 }} variant="body2" color="secondary">
      {"Copyright © "}
      <Link style={{ color: BLACK }} href="https://pdf.co.ir/">
        pdf.co.ir
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    textAlign: "left",
    position: "relative",
    backgroundColor: WHITE,
    marginTop: "auto",
    bottom: 0,
    width: "100%",
    color: BLACK,
    boxShadow: SHADOW_1,
    borderBottom: "1px solid rgba(0,0,0,0.1)",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    textTransform: "uppercase",
    color: "#4a5f73",
    marginBottom: 10,
    "&:before": {
      content: "''",
      float: "left",
      width: 10,
      height: 10,
      background: "#2dcea2",
      borderRadius: "100% 50% 50% 100%/75% 69% 69% 75%",
      marginTop: 10,
      marginRight: 8,
    },
  },
  listitem: {
    fontSize: 14,
    textTransform: "capitalize",
    color: GRAY_2,
    "&:hover": {
      color: BLACK,
      cursor: "pointer",
    },
  },
  linkText: {
    padding: "5px 0px",
    color: BLACK,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  innerbox: {
    marginBottom: 50,
  },
  innerIcons: {
    width: 60,
    height: 60,
    backgroundColor: GRAY_6,
    display: "block",
    margin: "auto",
    borderRadius: "100% 50% 50% 100%/75% 69% 69% 75%",
    boxSizing: "border-box",
    padding: 12,
    color: "#666",
    marginBottom: 15,
  },
  namad: {
    width: "50%",
    height: "100%",
    padding: "20px",
  },
}));

export default function Footer() {
  const classes = useStyles();
  const features = [
    {
      id: 0,
      icon: <FingerprintIcon className={classes.innerIcons} />,
      title: "امنیت فوق العاده زیاد",
    },
    {
      id: 1,
      icon: <CardGiftcardIcon className={classes.innerIcons} />,
      title: "دارای هدیه رایگان",
    },
    {
      id: 2,
      icon: <TvIcon className={classes.innerIcons} />,
      title: "آموزش های رایگان",
    },
    {
      id: 3,
      icon: <LocalShippingIcon className={classes.innerIcons} />,
      title: "ارسال رایگان محصولات",
    },
    {
      id: 4,
      icon: <CreditCardIcon className={classes.innerIcons} />,
      title: "پرداخت با تمامی کارت ها",
    },
    {
      id: 5,
      icon: <MonetizationOnIcon className={classes.innerIcons} />,
      title: "قیمت های رقابتی",
    },
  ];
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" className={classes.container}>
        <Box
          display="flex"
          justifyContent="space-around"
          width="100%"
          alignItems="center"
          className={classes.innerbox}
        >
          <Grid container>
            {features.map((item, i) => (
              <Grid key={i} item md={2} sm={6} xs={12}>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="center"
                  margin="10px 0"
                >
                  {item.icon}
                  <Typography
                    variant="h6"
                    component="h6"
                    style={{ color: GRAY }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Grid container>
          {footerItems.map((item, i) => (
            <Grid key={i} item lg={3} sm={6} xs={12}>
              <Typography className={classes.title} variant="h5" component="h5">
                {item.title}
              </Typography>
              {item.children.map((child, index) => (
                <Link key={index} href={child.url} className={classes.listitem}>
                  <ListItem button className={classes.linkText}>
                    <ListItemText primary={child.name} />
                  </ListItem>
                </Link>
              ))}
            </Grid>
          ))}
          <Grid item lg={3} sm={6} xs={12}>
            <Box
              display="flex"
              width="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <img className={classes.namad} alt="enamad" src={enamad} />
              <img className={classes.namad} alt="enamad" src={samandehi} />
            </Box>
          </Grid>
        </Grid>
        <Copyright />
      </Container>
    </footer>
  );
}
