import React from "react";
import MetaDescriptions from "utils/MetaDescriptions";
import { Box, Container, Grid } from "@material-ui/core";
// components
import LightBanner from "components/lightBanner/LightBanner";
import Widget from "components/widget/Widget";
import SpecialsBox from "components/specialsBox/SpecialsBox";
import Recommendation from "components/recommendationBox/Recommendation";
import * as statements from "constants/statements";
import CircleprogressLoading from "components/circleprogressLoading/CircleprogressLoading";
// Static Images
import specialimg from "assets/SpecialImg.png";
import specialimg2 from "assets/SpeciallImg2.png";
import testProductImg from "assets/testProduct.jpg";
import testProductImg2 from "assets/testProduct2.jpg";
import cateImg from "assets/categoryimage_1.gif";
import cateImg2 from "assets/categoryimage_2.jpg";
import cateImg3 from "assets/categoryimage_3.jpg";
import cateImg4 from "assets/categoryimage_4.jpg";
import cate2Img1 from "assets/cateimg1.jpg";
import cate2Img2 from "assets/cateimg2.jpg";
import banner from "assets/monthBanner.jpg";
import CategoryImage from "components/categoryImage/CategoryImage";
import { useSlider } from "hooks/slider";
import { useProductList } from "hooks/products";
import MegaMenu from "components/mega/MegaMenu";

function Home() {
  const text = statements.default;
  const { data: slider, isLoading: sliderLoading } = useSlider();
  const {
    data: products,
    errorproducts,
    isLoading: productLoading,
  } = useProductList("", "ریمپ");
  const {
    data: productsTest2,
    error: Test2error,
    isLoading: productLoadingTest2,
  } = useProductList("", "ریمپ");
  return (
    <Box marginTop="15px">
      <MetaDescriptions title={"خانه"} descriptions={"this is Home page ."} />
      <Container maxWidth="lg">
        <LightBanner link={banner} height={"80px"} />
        {sliderLoading === true ? (
          <CircleprogressLoading />
        ) : (
          <Widget sliderData={slider} />
        )}
      </Container>
      {productLoading ? (
        <CircleprogressLoading />
      ) : (
        <SpecialsBox
          bgColor={"#EF394E"}
          banner={specialimg}
          Childs={products?.post}
        />
      )}
      <Container maxWidth="lg">
        <Grid style={{ margin: "20px 0" }} container>
          {categoryImages.map((item, i) => (
            <Grid key={i} item md={3} sm={6} xs={12}>
              <CategoryImage url={item.url} />
            </Grid>
          ))}
        </Grid>
      </Container>
      {productLoading ? (
        <CircleprogressLoading />
      ) : (
        <SpecialsBox
          bgColor={"#6bb927"}
          banner={specialimg2}
          Childs={products?.post}
        />
      )}
      <Container style={{ margin: "20px auto" }} maxWidth="lg">
        {productLoadingTest2 ? (
          <CircleprogressLoading />
        ) : Test2error !== null ? (
          ""
        ) : (
          <Recommendation Childs={productsTest2?.post} headLine={text.mobile} />
        )}
      </Container>
      <Container style={{ margin: "20px auto" }} maxWidth="lg">
        {productLoadingTest2 ? (
          <CircleprogressLoading />
        ) : Test2error !== null ? (
          ""
        ) : (
          <Recommendation
            Childs={productsTest2?.post}
            headLine={text.kapshan}
          />
        )}
        <Grid style={{ margin: "20px 0" }} container>
          {categoryImages2.map((item, i) => (
            <Grid key={i} item md={6} xs={12}>
              <CategoryImage url={item.url} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container style={{ margin: "20px auto" }} maxWidth="lg">
        {productLoadingTest2 ? (
          <CircleprogressLoading />
        ) : Test2error !== null ? (
          ""
        ) : (
          <Recommendation
            Childs={productsTest2?.post}
            headLine={text.porbazdid}
          />
        )}
      </Container>
      <Container style={{ margin: "20px auto" }} maxWidth="lg">
        {productLoadingTest2 ? (
          <CircleprogressLoading />
        ) : Test2error !== null ? (
          ""
        ) : (
          <Recommendation
            Childs={productsTest2?.post}
            headLine={text.montakhab}
          />
        )}
      </Container>
    </Box>
  );
}
const categoryImages = [
  {
    id: 0,
    url: cateImg,
  },
  {
    id: 1,
    url: cateImg2,
  },
  {
    id: 2,
    url: cateImg3,
  },
  {
    id: 3,
    url: cateImg4,
  },
];
const categoryImages2 = [
  {
    id: 0,
    url: cate2Img1,
  },
  {
    id: 1,
    url: cate2Img2,
  },
];
const swiperItems = [
  {
    id: 0,
    image: testProductImg,
    title: "کاپشن مردانه اسپیور مدل 2s16-27",
    discount: 14,
    priceDel: 17000,
    price_val: 11000,
    remained_value: 60,
    deadLine: "March, 24, 2022",
  },
  {
    id: 1,
    image: testProductImg2,
    title: "کاپشن مردانه اسپیور مدل 2s16-27",
    discount: 64,
    priceDel: 118000,
    price_val: 15498,
    remained_value: 11,
    deadLine: "may, 24, 2021",
  },
  {
    id: 2,
    image: testProductImg2,
    title: "کاپشن مردانه اسپیور مدل 2s16-27",
    discount: 79,
    priceDel: 75000,
    price_val: 19874,
    remained_value: 90,
    deadLine: "june, 24, 2021",
  },
  {
    id: 3,
    image: testProductImg,
    title: "کاپشن مردانه اسپیور مدل 2s16-27",
    discount: 0,
    priceDel: 198000,
    price_val: 9000,
    remained_value: 76,
    deadLine: "september, 24, 2021",
  },
  {
    id: 4,
    image: testProductImg2,
    title: "کاپشن مردانه اسپیور مدل 2s16-27",
    discount: 50,
    priceDel: 148000,
    price_val: 31000,
    remained_value: 12,
    deadLine: "october, 24, 2021",
  },
  {
    id: 5,
    image: testProductImg,
    title: "کاپشن مردانه اسپیور مدل 2s16-27",
    discount: 50,
    priceDel: 148000,
    price_val: 31000,
    remained_value: 12,
    deadLine: "october, 24, 2021",
  },
  {
    id: 6,
    image: testProductImg2,
    title: "کاپشن مردانه اسپیور مدل 2s16-27",
    discount: 50,
    priceDel: 148000,
    price_val: 31000,
    remained_value: 12,
    deadLine: "october, 24, 2021",
  },
  {
    id: 7,
    image: testProductImg,
    title: "کاپشن مردانه اسپیور مدل 2s16-27",
    discount: 50,
    priceDel: 148000,
    price_val: 31000,
    remained_value: 12,
    deadLine: "october, 24, 2021",
  },
];
export default Home;
