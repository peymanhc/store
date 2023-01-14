import React from "react";
import {
  Box,
  InputBase,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import * as statements from "constants/statements";
import { GRAY_5, GRAY, GREEN_2, WHITE, GRAY_4 } from "constants/colors";
import EmailIcon from "@material-ui/icons/Email";
import { RED } from "constants/colors";
import { BLACK_SHADOW } from "constants/colors";
import { GREEN_SHADOW } from "constants/colors";
import { GRAY_6 } from "constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: 40,
    flexDirection: "column",
    width: "100%",
    backgroundColor: WHITE,
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  title: {
    textTransform: "uppercase",
    color: "#4a5f73",
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
  form: {
    margin: 10,
  },
  inputbox: {
    border: `1px solid ${GRAY_5}`,
    padding: "10px 15px",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    marginTop: 15,
  },
  input: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: GRAY,
    backgroundColor: GRAY_6,
    borderRadius: "50%",
    width: 30,
    height: 30,
    padding: 6,
  },
  submit: {
    backgroundColor: GREEN_2,
    color: WHITE,
    padding: "8px 40px",
    marginTop: 15,
    boxShadow: GREEN_SHADOW,
    "&:hover": {
      backgroundColor: "#515151",
      boxShadow: BLACK_SHADOW,
    },
  },
  login: {
    backgroundColor: RED,
    color: WHITE,
    padding: "8px 40px",
    marginTop: 15,
    boxShadow: GREEN_SHADOW,
    "&:hover": {
      backgroundColor: "#515151",
      boxShadow: BLACK_SHADOW,
    },
  },
}));
const ForgotPassword = ({ setform, form }) => {
  const classes = useStyles();
  const text = statements.default;
  const Login = () => {
    setform("login");
  };
  return (
    <Box className={classes.root}>
      <Typography variant="h5" component="h2" className={classes.title}>
        {text.forgotpass}
      </Typography>
      <form className={classes.form}>
        <Box className={classes.inputbox}>
          <InputBase
            name="email"
            className={classes.input}
            placeholder={text.nameOrEmail}
          />
          <EmailIcon className={classes.icon} />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button className={classes.submit}>{text.resetPassword}</Button>
          <Button onClick={Login} className={classes.login}>
            {text.open}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ForgotPassword;
