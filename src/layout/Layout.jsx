import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { Box, makeStyles, Typography } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { WHITE } from "constants/colors";
import * as statements from "constants/statements";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
  },
  wrapper: {
    flex: 1,
  },
  gotopBox: {
    marginTop: 30,
    width: "100%",
    borderTop: "1px solid rgba(0,0,0,0.1)",
    borderBottom: "1px solid #cfd8dc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    padding: "20px",
  },
  upicon: {
    color: WHITE,
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: "#b3b4b6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 15px",
  },
}));
function Layout(props) {
  const classes = useStyles();
  const text = statements.default;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box className={classes.root}>
      <Navbar />
      <main className={classes.wrapper}>{props.children}</main>
      <Box onClick={() => scrollToTop()} className={classes.gotopBox}>
        <Box className={classes.upicon}>
          <KeyboardArrowUpIcon style={{ color: "white" }} />
        </Box>
        <Typography component="p" variant="h5">
          {text.goTop}
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
