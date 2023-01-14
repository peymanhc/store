import React from "react";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Button,
  Typography,
  InputBase,
} from "@material-ui/core";
import TitleBar from "components/titleBar/TitleBar";
import MetaDescriptions from "utils/MetaDescriptions";
import * as statements from "constants/statements";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { WHITE, GRAY_5, GREEN_2, RED } from "constants/colors";
import SimpleTable from "components/simpleTable/SimpleTable";
import testproduct from "assets/testProduct.jpg";
import NumberInput from "components/numberInput/NumberInput";
import { BLACK } from "constants/colors";
import { BLUE_SHADOW } from "constants/colors";
import { GRAY_6 } from "constants/colors";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: WHITE,
    borderRadius: 5,
    boxShadow: BLUE_SHADOW,
    marginTop: 30,
  },
  basket: {
    padding: "30px 10px",
  },
  cartList: {
    border: `1px solid ${GRAY_5}`,
    padding: 20,
    borderRadius: 5,
  },
  totalPriceRoot: {
    padding: "0 15px ",
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
      marginTop: 8,
      marginRight: 8,
    },
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
  payBtn: {
    backgroundColor: GREEN_2,
    color: WHITE,
    width: "100%",
    padding: "8px 15px",
    marginTop: 20,
    fontSize: 18,
    "&:hover": {
      backgroundColor: GREEN_2,
    },
  },
  delete: {
    color: RED,
    fontSize: 20,
    cursor: "pointer",
    "&:hover": {
      color: "#ab2e31",
    },
  },
  cardimage: {
    backgroundColor: WHITE,
    width: 70,
    height: 70,
    boxShadow: `0px 2px 7px ${GRAY_6}`,
    padding: 5,
    borderRadius: "50%",
  },
  producttxt: {
    margin: "6px 0",
    fontSize: 12,
  },
  numberInputBtn: {
    [theme.breakpoints.down("xs")]: {
      margin: "0 10px",
    },
  },
  dicount: {
    backgroundColor: GRAY_6,
    borderRadius: 5,
    padding: 15,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  discountCode: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%",
    },
  },
  updatebtn: {
    color: WHITE,
    backgroundColor: GREEN_2,
    padding: "8px 20px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 0",
      width: "100%",
    },
  },
  discountInput: {
    backgroundColor: WHITE,
    color: BLACK,
    borderRadius: 4,
    padding: "6px 20px",
    marginRight: 15,
    [theme.breakpoints.down("sm")]: {
      marginRight: "auto",
      width: "100%",
    },
  },
}));

function Basket() {
  const text = statements.default;
  const classes = useStyles();
  const history = useHistory();
  const GoToCheckOut = () => {
    history.push("/Checkout");
  };

  return (
    <Box>
      <MetaDescriptions
        title={"سبد خرید"}
        descriptions={"this is Basket page ."}
      />
      <TitleBar title={text.basket} />
      <Container maxWidth="lg">
        <Box className={classes.root}>
          <Grid className={classes.basket} container>
            <Grid item md={8} sm={6} xs={12}>
              <Box className={classes.cartList}>
                <SimpleTable column={columns}>
                  {cart?.map((item, i) => (
                    <tr key={i}>
                      <td data-title="">
                        <HighlightOffIcon className={classes.delete} />
                      </td>
                      <td data-title="تصویر">
                        <img
                          className={classes.cardimage}
                          alt="basket_item"
                          src={item.image}
                        />
                      </td>
                      <td data-title="محصول">
                        <Box display="flex" flexDirection="column">
                          <Typography
                            className={classes.producttxt}
                            component="span"
                            variant="h6"
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            className={classes.producttxt}
                            component="span"
                            variant="h6"
                          >
                            {"فروشنده  :"} {item.seller}
                          </Typography>
                        </Box>
                      </td>
                      <td data-title="قیمت">
                        <Typography component="p" variant="h5">
                          {item.price}
                          <span className={classes.currency}>تومان</span>
                        </Typography>
                      </td>
                      <td data-title="تعداد">
                        <NumberInput
                          min={0}
                          max={15}
                          value={item.count}
                          className={classes.numberInputBtn}
                        />
                      </td>
                      <td data-title="مجموع">
                        <Typography component="p" variant="h5">
                          {item.count * item.price}
                          <span className={classes.currency}>تومان</span>
                        </Typography>
                      </td>
                    </tr>
                  ))}
                </SimpleTable>
                <Box className={classes.dicount}>
                  <Box className={classes.discountCode}>
                    <InputBase
                      placeholder={text.discountCode}
                      className={classes.discountInput}
                    />
                    <Button className={classes.updatebtn}>
                      {text.submitdiscountCode}
                    </Button>
                  </Box>
                  <Button className={classes.updatebtn}>
                    {text.updatecart}
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
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
                <Button onClick={GoToCheckOut} className={classes.payBtn}>
                  {text.payTxt}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

const columns = [
  {
    id: 1,
    title: "",
  },
  {
    id: 2,
    title: "",
  },
  {
    id: 3,
    title: "محصول",
  },
  {
    id: 4,
    title: "قیمت",
  },
  {
    id: 5,
    title: "تعداد",
  },
  {
    id: 6,
    title: "مجموع",
  },
];

const cart = [
  {
    id: 0,
    image: testproduct,
    title: "پیراهن مردانه کد M02247",
    seller: "فروشگاه هادوی",
    price: 1400,
    count: 2,
  },
  {
    id: 1,
    image: testproduct,
    title: "زیتون شور بیژن - 680 گرم",
    seller: "فروشگاه پیشگامان",
    price: 709,
    count: 5,
  },
];

export default Basket;
