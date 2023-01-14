import { makeStyles, Box, Button } from "@material-ui/core";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Card from "components/card/Card";
import ProductBox from "components/productBox/ProductBox";
import { WHITE } from "constants/colors";
import { BLACK } from "constants/colors";
import Card3 from "components/card_3/Card3";
const useStyles = makeStyles({
  buttonGp: {
    position: "ltr !important",
    height: 0,
    width: 80,
    backgroundColor: WHITE,
    right: 30,
  },
  arrowBtn: {
    marginTop: "-50px",
    width: 50,
    minWidth: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    position: "absolute",
    border: "none",
    backgroundColor: WHITE,
    boxShadow: "1.5px 0 4px 0 rgba(0,0,0,.25)",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: WHITE,
    },
  },
  arrow: {
    width: 10,
    border: "none",
    height: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: BLACK,
    margin: "auto",
  },
  leftarrow: {
    transform: "rotateY(180deg)",
  },
  "@global": {
    ".react-multi-carousel-list": {
      direction: "initial",
      borderRadius: 10,
    },
    ".react-multi-carousel-dot-list": {
      marginBottom: "20px !important",
    },
    ".react-multi-carousel-dot button": {
      backgroundColor: "#e2e8f0 !important",
      width: "8px !important",
      height: "8px !important",
      margin: "0 5px",
      border: "1px solid #e2e8f0 !important",
    },
    ".react-multi-carousel-dot--active button": {
      backgroundColor: "#00bfd6 !important",
      width: "15px !important",
      height: "8px !important",
      borderRadius: "5px !important",
      margin: "0 5px",
      border: "1px solid #00bfd6 !important",
    },
  },
  image: {
    cursor: "grab",
  },
});
const ButtonGroup = ({ next, previous }) => {
  const classes = useStyles();
  return (
    <div className={classes.buttonGp}>
      <Button
        aria-label="prev"
        component="span"
        style={{ left: 5, borderRadius: "0 8px 8px 0" }}
        className={classes.arrowBtn}
        onClick={() => previous()}
      >
        <span className={classes.arrow}>
          <ArrowForwardIosIcon
            style={{ fontSize: 14 }}
            className={classes.leftarrow}
          />
        </span>
      </Button>
      <Button
        aria-label="prev"
        component="span"
        style={{ right: 5, borderRadius: "8px 0 0 8px" }}
        className={classes.arrowBtn}
        onClick={() => next()}
      >
        <span style={{ color: BLACK }} className={classes.arrow}>
          <ArrowForwardIosIcon style={{ fontSize: 14 }} />
        </span>
      </Button>
    </div>
  );
};
const SpecialSlider = ({ child, cardType, renderItem }, props) => {
  const classes = useStyles();
  return (
    <div
      style={{
        paddingBottom: "30px",
        position: "relative",
        direction: "ltr",
        margin: "10px 0",
      }}
    >
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        customButtonGroup={
          <ButtonGroup next={props.next} previous={props.previous} />
        }
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: renderItem,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {child?.map((item, i) => (
          <Box key={i} padding="5px">
            {cardType === 1 ? (
              <Card
                image={item.thumb}
                title={item.title}
                discount={item.off}
                priceDel={item.priceDel}
                price_val={item.price}
                remained_value={item.hits}
                deadLine={"March, 24, 2022"}
                id={item.id}
              />
            ) : cardType === 3 ? (
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
            ) : (
              <ProductBox
                image={item.thumb}
                title={item.title}
                discount={item.off}
                priceDel={item.priceDel}
                price_val={item.price}
                remained_value={item.hits}
                deadLine={"March, 24, 2022"}
                id={item.id}
              />
            )}
          </Box>
        ))}
      </Carousel>
    </div>
  );
};
export default SpecialSlider;
