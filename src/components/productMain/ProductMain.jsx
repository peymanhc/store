import React from "react";
import { Box, makeStyles, Typography, Grid } from "@material-ui/core";
// components
import ProductTitle from "components/productTitle/ProductTitle";
import ProductProperty from "components/productProperty/ProductProperty";
import ProductSeller from "components/productSeller/ProductSeller";
import Guarantees from "components/guarantees/Guarantees";
import ProductGallery from "components/productGallery/ProductGallery";
import * as statements from "constants/statements";
// icons
import AvTimerIcon from "@material-ui/icons/AvTimer";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import CopyrightIcon from "@material-ui/icons/Copyright";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
// colors
import { WHITE, PRIMARY, GRAY } from "constants/colors";
import { GREEN_2 } from "constants/colors";
import { BLUE_SHADOW } from "constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    minHeight: 55,
    padding: "15px 0px",
    width: "100%",
    backgroundColor: WHITE,
    borderRadius: 5,
    boxShadow: BLUE_SHADOW,
    marginTop: 30,
    textAlign: "left",
  },
  delivery: {
    backgroundColor: "rgba(247,169,0,0.1)",
    color: "rgba(247,164,0,0.65)",
    borderRadius: 5,
    padding: 20,
    width: "100%",
    marginTop: 15,
    display: "flex",
    alignItems: "center",
  },
  deliverytext: {
    fontWeight: 900,
    margin: "0 10px",
  },
  params: {
    color: GRAY,
    marginTop: 10,
  },
  sheild: {
    color: PRIMARY,
    marginRight: 10,
    fontSize: 18,
  },
  productMetaCategory: {
    color: GRAY,
    backgroundColor: "#f3f3f3",
    borderRadius: 6,
    padding: "10px 15px",
    display: "flex",
    alignItems: "center",
    margin: "15px",
    marginLeft: 0,
    cursor: "pointer",
  },
  icon: {
    marginRight: 7,
  },
  wooscpsroot: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]:{
      flexDirection:"column"
    },
  },
  wooscp: {
    backgroundColor: "#f3f3f3",
    color: GRAY,
    width: "100%",
    padding: 15,
    borderRadius: 5,
    margin: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: GREEN_2,
      color: WHITE,
      transition: "0.3s",
    },
  },
  space:{
    padding:"0 20px"
  }
}));

const ProductMain = ({
  name,
  description,
  rate,
  property,
  daysend,
  sales,
  returnproduct,
  category,
  brand,
  deadlineTime,
  lastprice,
  price,
  gallery,
  discount
}) => {
  const classes = useStyles();
  const text = statements.default;
  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid className={classes.space} item md={4} xs={12}>
          <ProductGallery gallery={gallery} discount={discount} /> 
          <Box className={classes.wooscpsroot}>
            {wooscps.map((item, i) => (
              <Box key={i} className={classes.wooscp}>
                {item.icon}
                <Typography
                  style={{ marginTop: 10 }}
                  variant="body1"
                  component="p"
                >
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid className={classes.space} item md={8} xs={12}>
          <Grid container>
            <Grid item md={6} xs={12}>
              <ProductTitle name={name} description={description} rate={rate} />
              <ProductProperty
                title={text.propetydetail}
                child={property}
              />
              <Box className={classes.delivery}>
                <AvTimerIcon />
                <Typography
                  variant="h6"
                  component="span"
                  className={classes.deliverytext}
                >
                  {`${text.max} ${daysend} ${text.day} ${text.deliverd}`}
                </Typography>
              </Box>
              <Box>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.params}
                >
                  <VerifiedUserIcon className={classes.sheild} />
                  <Typography variant="body1" component="p">
                    {` ${sales} ${text.successSell}`}
                  </Typography>
                </Box>
                {returnproduct === true && (
                  <Box
                    display="flex"
                    alignItems="center"
                    className={classes.params}
                  >
                    <AirportShuttleIcon
                      className={classes.sheild}
                      style={{ color: "#fac150" }}
                    />
                    <Typography variant="body1" component="p">
                      {text.zemanat}
                    </Typography>
                  </Box>
                )}
              </Box>
              <Box display="flex">
                <Box className={classes.productMetaCategory}>
                  <MenuOpenIcon className={classes.icon} />
                  <Typography variant="body1" component="p">
                    {`${text.category}:  ${category}`}
                  </Typography>
                </Box>
                <Box className={classes.productMetaCategory}>
                  <CopyrightIcon className={classes.icon} />
                  <Typography variant="body1" component="p">
                    {`${text.brand} :  ${brand}`}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box display="flex" alignItems="center" height="100%">
                <ProductSeller
                  deadlineTime={deadlineTime}
                  lastprice={lastprice}
                  price={price}
                />
              </Box>
            </Grid>
          </Grid>
          <Box margin="10px">
            <Guarantees />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
const wooscps = [
  {
    id: 0,
    name: "علاقه مندی",
    icon: <FavoriteBorderIcon />,
  },
  {
    id: 1,
    name: "اشتراک",
    icon: <ShareIcon />,
  },
  {
    id: 2,
    name: "اصلی است",
    icon: <CheckCircleOutlineIcon />,
  },
  {
    id: 3,
    name: "مقایسه",
    icon: <CompareArrowsIcon />,
  },
];
export default ProductMain;
