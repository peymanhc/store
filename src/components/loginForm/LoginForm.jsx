import React, { useState } from "react";
import {
  Box,
  InputBase,
  makeStyles,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import * as statements from "constants/statements";
import { GRAY_5, GRAY, GREEN_2, WHITE, GRAY_4 } from "constants/colors";
import EmailIcon from "@material-ui/icons/Email";
import LockOpenIcon from "@material-ui/icons/LockOpen";
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
  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "15px",
    color: GRAY,
  },
  register: {
    textAlign: "center",
    marginTop: 50,
    color: GREEN_2,
    cursor: "pointer",
  },
}));
const LoginForm = ({ setform, form }) => {
  const classes = useStyles();
  const text = statements.default;
  const [savedata, setSavedata] = useState(false);
  const Register = () => {
    setform("register");
  };
  const ForgotPassword = () => {
    setform("forgotPassword");
  };
  return (
    <Box className={classes.root}>
      <Typography variant="h5" component="h2" className={classes.title}>
        {text.loginTitle}
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
        <Box className={classes.inputbox}>
          <InputBase
            name="password"
            type="password"
            className={classes.input}
            placeholder={text.password}
          />
          <LockOpenIcon className={classes.icon} />
        </Box>
        <Button className={classes.submit}>{text.open}</Button>
        <Box className={classes.actions}>
          <FormControlLabel
            control={
              <Checkbox
                checked={savedata}
                onChange={() => setSavedata(!savedata)}
                name="savedata"
                style={{ color: GREEN_2 }}
              />
            }
            label={
              <Typography variant="body1" component="span">
                {text.savePassword}
              </Typography>
            }
          />
          <Typography onClick={ForgotPassword} style={{cursor:"pointer"}} variant="body2" component="span">
            {text.forgotpass}
          </Typography>
        </Box>
        <Typography
          onClick={Register}
          className={classes.register}
          variant="subtitle1"
          component="h5"
        >
          <span style={{ color: GRAY_4, fontSize: 14 }}>{text.newUser}</span>
          {text.register}
        </Typography>
      </form>
    </Box>
  );
};

export default LoginForm;
