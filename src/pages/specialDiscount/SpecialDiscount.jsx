import React from "react";
import clsx from "clsx";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import MetaDescriptions from "utils/MetaDescriptions";
import DiscountCategory from "components/discountCategory/DiscountCategory";
import SpecialSlider from "components/specialSlider/SpecialSlider";
import * as statements from "constants/statements";
import { WHITE, GRAY } from "constants/colors";
// images
import testProduct from "assets/testProduct.jpg";
import testProduct2 from "assets/testProduct2.jpg";
import SpecialImg from "assets/SpecialImg.png";
import SpecialImg2 from "assets/SpeciallImg2.png";
import headimg from "assets/discountheader.png";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#E43267",
    backgroundImage: `url(${headimg})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    color: WHITE,
    height: 210,
    width: "100%",
  },
  root: {
    position: "relative",
  },
  wrapper: {
    position: "relative",
    marginTop: 240,
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
  boxWrapper: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: WHITE,
    borderRadius: 5,
    boxShadow: "0 10px 40px rgba(110,134,216,.2)",
    padding: 30,
    overflow: "hidden",
  },
  categorybox: {
    position: "absolute",
    top: -50,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  boxposts: {
    display: "flex",
    width: "100%",
    padding: 0,
    alignItems: "inherit",
  },
  bannerSection: {
    width: "20%",
    backgroundColor: "#e9265b",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  banner: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: 40,
  },
  postInfo: {
    width: "80%",
    height: "100%",
    padding: 20,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  title: {
    marginBottom: 20,
    color: GRAY,
  },
}));

const SpecialDiscount = () => {
  const classes = useStyles();
  const text = statements.default;

  return (
    <Box marginBottom="20px">
      <MetaDescriptions
        title={"تخفیف ویژه"}
        descriptions={"this is SpecialDiscount page ."}
      />
      <Box className={classes.header} />
      <Container className={classes.root} maxWidth="lg">
        <Box className={clsx(classes.boxWrapper, classes.categorybox)}>
          <DiscountCategory data={categoty} />
        </Box>
      </Container>
      <Container className={classes.wrapper} maxWidth="lg">
        <Box className={clsx(classes.boxWrapper, classes.boxposts)}>
          <Box className={classes.postInfo}>
            <Typography className={classes.title} variant="h5" component="h3">
              {text.bestpersonal}
            </Typography>
            <SpecialSlider renderItem={4} cardType={1} child={swiperItems} />
          </Box>
          <Box className={classes.bannerSection}>
            <img className={classes.banner} alt={"banner"} src={SpecialImg} />
          </Box>
        </Box>
        <Box
          style={{ marginTop: "25px" }}
          className={clsx(classes.boxWrapper, classes.boxposts)}
        >
          <Box className={classes.postInfo}>
            <Typography className={classes.title} variant="h5" component="h3">
              {text.besteat}
            </Typography>
            <SpecialSlider renderItem={4} cardType={1} child={swiperItems} />
          </Box>
          <Box
            style={{ backgroundColor: "#22aed7" }}
            className={classes.bannerSection}
          >
            <img className={classes.banner} alt={"banner"} src={SpecialImg2} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const categoty = [
  {
    id: 0,
    image: testProduct,
  },
  {
    id: 1,
    image: testProduct2,
  },
  {
    id: 2,
    image: testProduct,
  },
  {
    id: 3,
    image: testProduct2,
  },
  {
    id: 4,
    image: testProduct,
  },
  {
    id: 5,
    image: testProduct2,
  },
  {
    id: 6,
    image: testProduct,
  },
  {
    id: 7,
    image: testProduct2,
  },
];
const swiperItems = [
  {
    id: 0,
    thumb: testProduct2,
    title: "کاپشن مردانه اسپیور مدل 2s16-27",
    discount: 14,
    priceDel: 17000,
    price_val: 11000,
    remained_value: 60,
    deadLine: "March, 24, 2022",
  },
  {
    id: 1,
    thumb: testProduct,
    title: "کاپشن مردانه اسپیور مدل 2s16-27",
    discount: 64,
    priceDel: 118000,
    price_val: 15498,
    remained_value: 11,
    deadLine: "may, 24, 2021",
  },
  {
    id: 2,
    thumb: testProduct2,
    title: "کاپشن مردانه اسپیور مدل 2s16-27",
    discount: 79,
    priceDel: 75000,
    price_val: 19874,
    remained_value: 90,
    deadLine: "june, 24, 2021",
  },
  {
    id: 3,
    thumb: testProduct,
    title: "کاپشن مردانه اسپیور مدل 2s16-27",
    discount: 0,
    priceDel: 198000,
    price_val: 9000,
    remained_value: 76,
    deadLine: "september, 24, 2021",
  },
  {
    id: 4,
    thumb: testProduct,
    title: "کاپشن مردانه اسپیور مدل 2s16-27",
    discount: 50,
    priceDel: 148000,
    price_val: 31000,
    remained_value: 12,
    deadLine: "october, 24, 2021",
  },
  {
    id: 5,
    thumb: testProduct2,
    title: "کاپشن مردانه اسپیور مدل 2s16-27",
    discount: 50,
    priceDel: 148000,
    price_val: 31000,
    remained_value: 12,
    deadLine: "october, 24, 2021",
  },
  {
    id: 6,
    thumb: testProduct,
    title: "کاپشن مردانه اسپیور مدل 2s16-27",
    discount: 50,
    priceDel: 148000,
    price_val: 31000,
    remained_value: 12,
    deadLine: "october, 24, 2021",
  },
  {
    id: 7,
    thumb: testProduct2,
    title: "کاپشن مردانه اسپیور مدل 2s16-27",
    discount: 50,
    priceDel: 148000,
    price_val: 31000,
    remained_value: 12,
    deadLine: "october, 24, 2021",
  },
];
export default SpecialDiscount;
