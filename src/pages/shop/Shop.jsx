import React from "react";
import {
  Box,
  Container,
  FormControl,
  Grid,
  makeStyles,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import CloseIcon from "@material-ui/icons/Close";
import {
  WHITE,
  BLUE_SHADOW,
  GRAY_4,
  GRAY,
  GREEN_2,
  GRAY_6,
} from "constants/colors";
import MetaDescriptions from "utils/MetaDescriptions";
import * as statements from "constants/statements";
import Range from "components/range/Range";
import dropdownIcon from "assets/dropdown.png";
import { useProductList } from "hooks/products";
import Card3 from "components/card_3/Card3";
import CircleprogressLoading from "components/circleprogressLoading/CircleprogressLoading";

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
  ctitle: {
    fontSize: 20,
    color: "#4a5f73",
  },
  price: {
    color: GRAY,
    fontSize: 13,
  },
  filter: {
    margin: "20px 0",
    backgroundColor: GRAY_6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 15px",
    color: GRAY_4,
    borderRadius: 10,
    cursor: "pointer",
    marginRight: 10,
  },
  closeIcon: {
    color: GRAY_4,
    marginRight: 10,
    fontSize: 15,
  },
  select: {
    backgroundColor: GRAY_6,
    border: 0,
    padding: "9px 18px",
    borderRadius: 5,
    width: 270,
    color: GRAY,
    cursor: "pointer",
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none" /* Remove default arrow */,
  },
  downIcon: {
    backgroundImage: `url(${dropdownIcon})`,
    width: 15,
    height: "100%",
    position: "absolute",
    right: 15,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  cards: {
    marginTop: 10,
  },
  card: {
    padding: 10,
  },
  pagination: {
    display: "flex",
    margin: "30px auto",
    marginTop: 50,
  },
  "@global": {
    ".MuiPaginationItem-page": {
      backgroundColor: "white",
    },
  },
}));
function Shop() {
  const classes = useStyles();
  const text = statements.default;
  const [priceRange, setPriceRange] = React.useState([20, 500]);
  const [category, setCategory] = React.useState(null);
  const [Pagenumber, setPagenumber] = React.useState(1);

  const {
    data: products,
    errorproducts,
    isLoading: productLoading,
  } = useProductList("", "");
  const handleChangePrice = (event, newValue) => {
    setPriceRange(newValue);
  };
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const handlePageChange = (event, value) => {
    setPagenumber(() => {
      const newstate = value;
      return newstate;
    });
    window.scroll(0, 0);
  };
  const pageCount = React.useMemo(() => {
    return Math.ceil(products?.post?.length / 6) || 0;
  }, [products?.post?.length, 6]);
  return (
    <Box>
      <MetaDescriptions
        title={"فروشگاه"}
        descriptions={"this is Shop page ."}
      />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={3}>
            <Box className={classes.root}>
              <Typography
                variant="subtitle1"
                component="span"
                className={classes.title}
              >
                {text.price}
              </Typography>
              <Range value={priceRange} onChange={handleChangePrice} />
              <Typography
                variant="h6"
                component="p"
                className={classes.price}
              >{`${text.price}: ${priceRange[0]} ${text.currency} __ ${priceRange[1]} ${text.currency}`}</Typography>
            </Box>
            <Box className={classes.root}>
              <Typography
                variant="subtitle1"
                component="span"
                className={classes.title}
              >
                {text.categoryProducts}
              </Typography>
              <FormControl component="fieldset" style={{ margin: "20px 8px" }}>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={category}
                  onChange={handleChangeCategory}
                >
                  {[0, 1, 2, 3, 4, 5, 6].map((item, i) => (
                    <FormControlLabel
                      key={i}
                      value={` آرایشی و بهداشتی${i}`}
                      control={<Radio style={{ color: GREEN_2 }} />}
                      label=" آرایشی و بهداشتی"
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Box className={classes.root}>
              <Typography
                className={classes.ctitle}
                variant="h6"
                component="h4"
              >
                {text.store}
              </Typography>
              <Box className={classes.filter}>
                <CloseIcon className={classes.closeIcon} />
                <Typography variant="body1" component="p">
                  {text.priceRange}
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
                <Typography
                  style={{ color: GRAY_4 }}
                  variant="subtitle2"
                  component="span"
                >
                  {" نمایش 1–6 از 51 نتیجه"}
                </Typography>
                <Box position="relative">
                  <div className={classes.downIcon}></div>
                  <select className={classes.select}>
                    <option value="0">{text.filter_1}</option>
                    <option value="1">{text.filter_2}</option>
                    <option value="2">{text.filter_3}</option>
                    <option value="3">{text.filter_4}</option>
                    <option value="4">{text.filter_5}</option>
                  </select>
                </Box>
              </Box>
            </Box>
            {productLoading ? (
              <CircleprogressLoading />
            ) : (
              <Grid container className={classes.cards}>
                {products?.post
                  .slice((Pagenumber - 1) * 6, Pagenumber * 6)
                  .map((item, i) => (
                    <Grid
                      key={item.id}
                      className={classes.card}
                      item
                      xs={12}
                      md={6}
                      lg={4}
                    >
                      <Card3
                        image={item.thumb}
                        title={item.title}
                        discount={item.off}
                        priceDel={item.priceDel}
                        price_val={item.price}
                        remained_value={item.hits}
                        deadLine={"March, 24, 2022"}
                        id={item.id}
                      />
                    </Grid>
                  ))}
                <Pagination
                  className={classes.pagination}
                  onChange={handlePageChange}
                  page={Pagenumber}
                  count={pageCount}
                  color="secondary"
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Shop;
