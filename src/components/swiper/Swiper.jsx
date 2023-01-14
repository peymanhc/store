import { makeStyles, Button } from "@material-ui/core";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { WHITE } from "constants/colors";
import { BLACK } from "constants/colors";
const useStyles = makeStyles({
  buttonGp: {
    position: "ltr !important",
    height: 0,
    width: 80,
    backgroundColor: WHITE,
    right: 30,
  },
  arrowBtn: {
    marginTop: "-25px",
    minWidth:45,
    width: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    position: "absolute",
    border: "none",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: "50%",
    cursor: "pointer",
    "&:hover":{
      backgroundColor: "rgba(255,255,255,0.8)",
    }
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
        style={{ left: 10 }}
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
        aria-label="next"
        style={{ right: 10 }}
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
const Swiper = ({ child }, props) => {
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
            items: 1,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        showDots
        slidesToSlide={1}
        swipeable
      >
        {child?.map((item, i) => (
          <div className={classes.image} key={i}>
            {item}
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Swiper;
