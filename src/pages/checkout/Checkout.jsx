import React from "react";
import {
  Box,
  Container,
  makeStyles,
  Typography,
  Grid,
  InputBase,
  Button
} from "@material-ui/core";
import TitleBar from "components/titleBar/TitleBar";
import * as statements from "constants/statements";
import MetaDescriptions from "utils/MetaDescriptions";
import { WHITE, BLUE_SHADOW, GRAY_4, GRAY_5,GREEN_2 } from "constants/colors";
import { GRAY_6 } from "constants/colors";
import PayImg from "assets/payir.png";
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
  commentText: {
    border: `1px solid ${GRAY_5}`,
    padding: 15,
    borderRadius: 5,
  },
  label: {
    color: GRAY_4,
    fontSize: 15,
    margin: "10px 0",
  },
  form: {
    padding: "10px ",
  },
  totalPriceRoot: {
    padding: "0 15px ",
  },
  priceWrapper: {
    marginTop: 20,
    border: `1px solid ${GRAY_5}`,
    borderRadius: 5,
  },
  totalprice: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: `1px solid ${GRAY_5}`,
    padding: "10px 50px",
  },
  currency: {
    marginLeft: "5px",
    fontSize: 12,
  },
  payBox: {
    width: "100%",
    padding: "10px 25px",
    minHeight: 20,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: GRAY_6,
  },
  payicon: {
    width: 80,
    height: 40,
    objectFit: "contain",
    marginLeft: 20,
  },
  payBtn: {
    backgroundColor: GREEN_2,
    color: WHITE,
    width: "100%",
    padding: "8px 15px",
    marginTop: 40,
    fontSize: 18,
    "&:hover": {
      backgroundColor: GREEN_2,
    },
  },
}));
function Checkout() {
  const text = statements.default;
  const classes = useStyles();
  return (
    <Box>
      <MetaDescriptions
        title={"تسویه حساب"}
        descriptions={"this is checkout page ."}
      />
      <TitleBar title={text.checkout} />
      <Container maxWidth="lg">
        <Box className={classes.root}>
          <Grid container>
            <Grid xs={12} md={6} lg={7}>
              <Typography
                variant="subtitle1"
                component="h2"
                className={classes.title}
              >
                {text.payDetail}
              </Typography>
              <form className={classes.form}>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" flexDirection="column">
                      <label htmlFor="name" className={classes.label}>
                        {text.name} <span style={{ color: "red" }}>*</span>
                      </label>
                      <InputBase
                        id="name"
                        className={classes.commentText}
                        name="name"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" flexDirection="column">
                      <label htmlFor="family" className={classes.label}>
                        {text.family} <span style={{ color: "red" }}>*</span>
                      </label>
                      <InputBase
                        id="family"
                        className={classes.commentText}
                        name="family"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" flexDirection="column">
                      <label htmlFor="company" className={classes.label}>
                        {text.company}
                      </label>
                      <InputBase
                        id="company"
                        className={classes.commentText}
                        name="company"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" flexDirection="column">
                      <label htmlFor="ostan" className={classes.label}>
                        {text.ostan} <span style={{ color: "red" }}>*</span>
                      </label>
                      <InputBase
                        id="ostan"
                        className={classes.commentText}
                        name="ostan"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" flexDirection="column">
                      <label htmlFor="shahr" className={classes.label}>
                        {text.shahr} <span style={{ color: "red" }}>*</span>
                      </label>
                      <InputBase
                        id="shahr"
                        className={classes.commentText}
                        name="shahr"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" flexDirection="column">
                      <label htmlFor="khiaban" className={classes.label}>
                        {text.khiaban} <span style={{ color: "red" }}>*</span>
                      </label>
                      <InputBase
                        id="khiaban"
                        className={classes.commentText}
                        name="khiaban"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" flexDirection="column">
                      <label htmlFor="address" className={classes.label}>
                        {text.address} <span style={{ color: "red" }}>*</span>
                      </label>
                      <InputBase
                        id="address"
                        className={classes.commentText}
                        name="address"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" flexDirection="column">
                      <label htmlFor="postalcode" className={classes.label}>
                        {text.postalcode}{" "}
                        <span style={{ color: "red" }}>*</span>
                      </label>
                      <InputBase
                        id="postalcode"
                        className={classes.commentText}
                        name="postalcode"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" flexDirection="column">
                      <label htmlFor="pelak" className={classes.label}>
                        {text.pelak} <span style={{ color: "red" }}>*</span>
                      </label>
                      <InputBase
                        id="pelak"
                        className={classes.commentText}
                        name="pelak"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" flexDirection="column">
                      <label htmlFor="telnum" className={classes.label}>
                        {text.telnum} <span style={{ color: "red" }}>*</span>
                      </label>
                      <InputBase
                        id="telnum"
                        className={classes.commentText}
                        name="telnum"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" flexDirection="column">
                      <label htmlFor="emailaddress" className={classes.label}>
                        {text.emailaddress}{" "}
                        <span style={{ color: "red" }}>*</span>
                      </label>
                      <InputBase
                        id="emailaddress"
                        className={classes.commentText}
                        name="emailaddress"
                      />
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid xs={12} md={6} lg={5}>
              <Box className={classes.totalPriceRoot}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  {text.totalPrice}
                </Typography>
                <Box className={classes.priceWrapper}>
                  <Box className={classes.totalprice}>
                    <Typography
                      style={{ fontWeight: "bold" }}
                      variant="h6"
                      component="p"
                    >
                      محصول
                    </Typography>
                    <Typography
                      style={{ fontWeight: "bold" }}
                      variant="h6"
                      component="p"
                    >
                      قیمت کل
                    </Typography>
                  </Box>
                  <Box className={classes.totalprice}>
                    <Typography variant="h6" component="p">
                      {text.totalpriceTxt}
                    </Typography>
                    <Typography variant="h6" component="span">
                      {"0"}
                      <span className={classes.currency}>{text.currency}</span>
                    </Typography>
                  </Box>
                  <Box
                    style={{ borderBottom: "none" }}
                    className={classes.totalprice}
                  >
                    <Typography variant="h6" component="p">
                      {text.total}
                    </Typography>
                    <Typography variant="h6" component="span">
                      {"0"}
                      <span className={classes.currency}>{text.currency}</span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box padding="15px">
                <Box className={classes.payBox}>
                  <Box display="flex" alignItems="center" marginBottom={5}>
                    <Typography component="span" variant="subtitle2">
                      pay.ir
                    </Typography>
                    <img
                      className={classes.payicon}
                      alt="pay.ir"
                      src={PayImg}
                    />
                  </Box>
                  <Typography variant="subtitle1" component="h6">
                    پرداخت امن به وسیله کلیه کارت های عضو شتاب از طریق درگاه
                    Pay.ir
                  </Typography>
                  <Typography
                    style={{ marginTop: 15 }}
                    variant="subtitle2"
                    component="p"
                  >
                    اطلاعات شخصی شما برای پردازش سفارش شما و پشتیبانی از تجربه
                    شما در این وبسایت و برای اهداف دیگری که در سیاست حفظ حریم
                    خصوصی توضیح داده شده است استفاده می‌شود.
                  </Typography>
                  <Button className={classes.payBtn} >{text.submitPay}</Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Checkout;
