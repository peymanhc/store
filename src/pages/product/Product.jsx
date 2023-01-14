import React from "react";
import { useParams } from "react-router-dom";
import MetaDescriptions from "utils/MetaDescriptions";
import { Box, Container, Typography } from "@material-ui/core";
import CategoryNav from "components/categoryNav/CategoryNav";
import ProductMain from "components/productMain/ProductMain";
import ProductTabs from "components/productTabs/ProductTabs";
import SpecialSlider from "components/specialSlider/SpecialSlider";
import { GRAY_4 } from "constants/colors";
import * as statements from "constants/statements";
import { useProductShow } from "hooks/products";
import CircleprogressLoading from "components/circleprogressLoading/CircleprogressLoading";

function Product() {
  const text = statements.default;
  const params = useParams();
  const {
    data: product,
    error: errproduct,
    isLoading: productLoading,
  } = useProductShow(params.id);
  const offPrice =
    ((100 - product?.content?.offPercent) * product?.content?.price) / 100;
  return (
    <Box marginTop="25px">
      <MetaDescriptions
        title={product?.content?.title}
        descriptions={"this is Product page ."}
      />
      {productLoading === true ? (
        <CircleprogressLoading />
      ) : (
        <Container maxWidth="lg">
          <CategoryNav
            categoryaddress={`خانه / لوازم شخصی /${product.content.title}`}
          />
          <ProductMain
            name={product?.content?.title}
            description={product?.content?.summary}
            lastprice={offPrice}
            price={product?.content?.price}
            sales={product?.content?.hits}
            gallery={product?.content?.gallery}
            discount={product?.content?.offPercent}
            rate={4}
            property={property}
            daysend={5}
            category={"لوازم شخصی"}
            brand="نایکی"
            deadlineTime={"may, 24, 2021"}
          />
          <ProductTabs
            productDescription={product?.content.content}
            furtherDetails={furtherDetails}
            comments={comments}
            sellerinfo={sellerinfo}
          />
          <Typography variant="h4" component="h3" style={{ color: GRAY_4 }}>
            {text.relatedProducts}
          </Typography>
          <Box style={{ marginTop: 40 }}>
            <SpecialSlider
              renderItem={4}
              cardType={3}
              child={product?.related}
            />
          </Box>
        </Container>
      )}
    </Box>
  );
}
const sellerinfo = [
  {
    id: 0,
    name: "پیمان هادوی",
    companyName: "فروشگاه هادوی",
    rate: 3.5,
    comments: 50,
  },
];
const comments = [
  {
    id: 0,
    name: "پیمان هادوی",
    rate: 3,
    comment: "ساعت تست یک ساعت بسیار زیبا در عین حال بد و یک متن بسیار تست است",
  },
  {
    id: 1,
    name: "ادم تست",
    rate: 5,
    comment: "کت شلوار خوبیه",
  },
];

const furtherDetails = [
  {
    id: 0,
    name: "رنگ",
    child: "زرد",
  },
  {
    id: 0,
    name: "وزن",
    child: "20 کیلو",
  },
];
const property = [
  {
    id: 0,
    title: "تسمه چرم",
  },
  {
    id: 1,
    title: "طراحی زیبا",
  },
  {
    id: 2,
    title: "قیمت پایین",
  },
];
export default Product;
