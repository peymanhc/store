import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GREEN_2 } from "constants/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: 300,
    height: 300,
    border: `5px solid ${GREEN_2}`,
    borderRadius: "50%",
  },
  center: {
    position: "relative",
    top: -7,
    left: 0,
    width: "100%",
    height: "100%",
    borderTop: "10px solid #262626",
    borderRadius: "50%",
    animation: `$animate 200ms ${theme.transitions.easing.easeInOut}`,
    "animation-duration": "1.6s",
  },
  title: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: 40,
  },
  "@keyframes animate": {
    "0%": {
      transform: "rotate(0)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      minHeight="70vh"
      padding="50px"
    >
      <div className={classes.container}>
        <div className={classes.center}></div>
        <h5 className={classes.title}>درحال بارگزاری</h5>
      </div>
    </Box>
  );
};

export default Loading;
