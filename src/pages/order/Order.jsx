import React from "react";
import {
  Box,
  Container,
  makeStyles,
  Grid,
  InputBase,
  InputLabel,
  Button,
} from "@material-ui/core";
import TitleBar from "components/titleBar/TitleBar";
import MetaDescriptions from "utils/MetaDescriptions";
import * as statements from "constants/statements";
import { WHITE, GRAY_4, GRAY_5, GREEN_2 } from "constants/colors";
import { Typography } from "@material-ui/core";
import { BLACK_SHADOW } from "constants/colors";
import { GREEN_SHADOW } from "constants/colors";
import { BLUE_SHADOW } from "constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
    backgroundColor: WHITE,
    borderRadius: 5,
    padding: "30px 20px",
    boxShadow: BLUE_SHADOW,
    marginTop: 30,
    color: GRAY_4,
  },
  form: {
    marginTop: 30,
    width: "100%",
  },
  input: {
    border: `1px solid ${GRAY_5}`,
    padding: "10px 15px",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    marginTop: 10,
  },
  submit: {
    backgroundColor: GREEN_2,
    color: "white",
    borderRadius: 5,
    boxShadow: GREEN_SHADOW,
    marginTop: 20,
    marginLeft: 10,
    padding: "7px 20px",
    "&:hover": {
      backgroundColor: GREEN_2,
      boxShadow: BLACK_SHADOW,
    },
  },
}));
function Order() {
  const classes = useStyles();
  const text = statements.default;
  return (
    <Box>
      <MetaDescriptions
        title={"پیگیری سفارش"}
        descriptions={"this is Orders page ."}
      />
      <TitleBar title={text.order} />
      <Container>
        <Box className={classes.root}>
          <Typography variant="body1" component="p">
            {text.orderTitle}
          </Typography>
          <form className={classes.form}>
            <Grid container>
              <Grid item md={6} xs={12}>
                <InputLabel style={{ marginTop: 15 }}>
                  {text.ordercode}
                </InputLabel>
                <InputBase
                  className={classes.input}
                  placeholder={text.ordercodeInput}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <InputLabel style={{ marginTop: 15 }}>
                  {text.emailorder}
                </InputLabel>
                <InputBase
                  className={classes.input}
                  placeholder={text.emailorderInput}
                />
              </Grid>
            </Grid>
            <Button className={classes.submit}>{text.tracking}</Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
}

export default Order;
