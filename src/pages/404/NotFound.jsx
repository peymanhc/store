import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import MetaDescriptions from "utils/MetaDescriptions";
import WarningIcon from "@material-ui/icons/Warning";
import RedoIcon from "@material-ui/icons/Redo";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin:"70px 0"
  },
  warning: {
    fontSize: 80,
    margin: "10px 0",
    color: "#a72a2f",
  },
  returnhome: {
    border: "1px solid #a72a2f",
    padding: "5px 15px",
    fontSize: 12,
    color: "#a72a2f",
    margin: "20px 0",
    borderRadius: 50,
    fontWeight: 900,
  },
  redoicon: {
    transform: "scale(-1, 1)",
    fontSize: 18,
    margin: "0 5px",
  },
  page: {
    marginTop: 50,
    color: "#a72a2f",
  },
}));

function NotFound() {
  const classes = useStyles();
  const history = useHistory();
  const RedirectHome = () => {
    history.replace("/");
  };
  return (
    <React.Fragment>
      <MetaDescriptions
        title={"404-Page پیدا نشد"}
        descriptions={"this is NotFound page ."}
      />
      <Box className={classes.wrapper}>
        <WarningIcon className={classes.warning} />
        <Typography variant="h6">
          The <b>{"page : "}</b>
          <span className={classes.page}>{history.location.pathname}</span> you
          requested does not exist.
        </Typography>
        <Button onClick={RedirectHome} className={classes.returnhome}>
          <RedoIcon className={classes.redoicon} />
          {"Click here to return home"}
        </Button>
      </Box>
    </React.Fragment>
  );
}

export default NotFound;
