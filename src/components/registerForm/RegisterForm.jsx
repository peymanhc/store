import React, { useState } from "react";
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
import LockOpenIcon from "@material-ui/icons/LockOpen";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { BLACK_SHADOW } from "constants/colors";
import { GREEN_SHADOW } from "constants/colors";
import { GRAY_6 } from "constants/colors";
import { useRegister } from "hooks/register";
import { useForm } from "react-hook-form";
import { RED } from "constants/colors";
import { useVerificationCode } from "hooks/register";
import PhoneCallbackIcon from "@material-ui/icons/PhoneCallback";
import CallEndIcon from "@material-ui/icons/CallEnd";

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
    textAlign: "center",
    marginTop: 50,
    color: GREEN_2,
    cursor: "pointer",
  },
}));
const RegisterForm = ({ setform, form }) => {
  const classes = useStyles();
  const text = statements.default;
  const { handleSubmit, register } = useForm();
  const [error, setError] = useState(null);
  const [level, setlevel] = useState(1);

  const Login = () => {
    setform("login");
  };

  const [onregister] = useRegister();
  const [mobileVerify] = useVerificationCode();

  const HandleRegister = (data,e) => {
    if (data.password !== data.ConfrimPassword) {
      setError("رمز عبور و تایید رمز عبور تطابق ندارد");
    } else if (data.name === "" || data.email === "" || data.password === "") {
      setError("فیلد ها را پر کنید");
    } else {
      e.preventDefault()
      mobileVerify(data.code);
    }
  };
  const CheckMobile = (data,e) => {
    e.preventDefault()
    onregister({
      name: data.name,
      family: "family",
      mobile: data.mobile,
      email: data.email,
      pass: data.pass,
      code: data.code
    });
  };
  return (
    <Box className={classes.root}>
      <Typography variant="h5" component="h2" className={classes.title}>
        {text.registeronWeb}
      </Typography>
      {level === 1 ? (
        <form className={classes.form}>
          <Box className={classes.inputbox}>
            <InputBase
              name="name"
              className={classes.input}
              placeholder={text.name}
              inputRef={register}
            />
            <PermIdentityIcon className={classes.icon} />
          </Box>
          <Box className={classes.inputbox}>
            <InputBase
              name="email"
              type="email"
              className={classes.input}
              placeholder={text.nameOrEmail}
              inputRef={register}
            />
            <EmailIcon className={classes.icon} />
          </Box>
          <Box className={classes.inputbox}>
            <InputBase
              name="mobile"
              className={classes.input}
              placeholder={text.mobile}
              inputRef={register}
            />
            <PhoneCallbackIcon className={classes.icon} />
          </Box>
          <Box className={classes.inputbox}>
            <InputBase
              name="password"
              type="password"
              className={classes.input}
              placeholder={text.password}
              inputRef={register}
            />
            <LockOpenIcon className={classes.icon} />
          </Box>
          <Box className={classes.inputbox}>
            <InputBase
              name="ConfrimPassword"
              type="password"
              className={classes.input}
              placeholder={text.ConfrimPassword}
              inputRef={register}
            />
            <LockOpenIcon className={classes.icon} />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Button
              onClick={handleSubmit(CheckMobile)}
              className={classes.submit}
            >
              {text.register}
            </Button>
            <Typography style={{ color: RED }} variant="body2" component="span">
              {error}
            </Typography>
          </Box>
          <Typography
            onClick={Login}
            className={classes.login}
            variant="subtitle1"
            component="h5"
          >
            <span style={{ color: GRAY_4, fontSize: 14, margin: "0 10px" }}>
              {text.youHaveAnAccount}
            </span>
            {text.open}
          </Typography>
        </form>
      ) : (
        <form className={classes.form}>
          <Box className={classes.inputbox}>
            <InputBase
              name="code"
              className={classes.input}
              placeholder={"رمز یکبار مصرف"}
              inputRef={register}
            />
            <CallEndIcon className={classes.icon} />
          </Box>
          <Button
            onClick={handleSubmit(CheckMobile)}
            className={classes.submit}
          >
            {text.register}
          </Button>
        </form>
      )}
    </Box>
  );
};

export default RegisterForm;
