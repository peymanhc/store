import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";
import MetaDescriptions from "utils/MetaDescriptions";
import TitleBar from "components/titleBar/TitleBar";
import * as statements from "constants/statements";
import { WHITE } from "constants/colors";
import loginimg from "assets/login.png";
import LoginForm from "components/loginForm/LoginForm";
import RegisterForm from "components/registerForm/RegisterForm";
import { useState } from "react";
import ForgotPassword from "components/forgotPassword/ForgotPassword";
import { BLUE_SHADOW } from "constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 35,
    minHeight: 500,
    padding: 20,
    width: "100%",
    backgroundColor: WHITE,
    borderRadius: 5,
    boxShadow: BLUE_SHADOW,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRight: "3px dotted rgba(0,0,0,0.05)",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  form: {
    width: "100%",
    height: "100%",
  },
}));
function Auth() {
  const classes = useStyles();
  const text = statements.default;
  const [form, setform] = useState("login");
  return (
    <Box>
      <MetaDescriptions title={"حساب کاربری"} descriptions={"this is Auth page ."} />
      <TitleBar title={text.Account} />
      <Container maxWidth="lg">
        <Box className={classes.root}>
          <img className={classes.image} alt="login" src={loginimg} />
          <Box className={classes.form}>
            {form === "login" ? (
              <LoginForm form={form} setform={setform} />
            ) : form === "register" ? (
              <RegisterForm form={form} setform={setform} />
            ) : (
              <ForgotPassword form={form} setform={setform}/>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Auth;
