import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import widget1 from "assets/widget1.gif";
import widget2 from "assets/widget_2.jpg";
import SimpleSwiper from "components/swiper/Swiper";
import { GRAY_5 } from "constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 50,
    height: 50,
    borderBottom: `1px solid ${GRAY_5}`,
  },
  banner: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    borderRadius: 10,
    margin: "10px 0",
    cursor: "pointer",
    [theme.breakpoints.down(960)]: {
      margin: "10px",
    },
    [theme.breakpoints.down(700)]: {
      margin: "10px 0",
    },
  },
  wrapper: {
    flexDirection: "column",
    [theme.breakpoints.down(960)]: {
      flexDirection: "row",
    },
    [theme.breakpoints.down(700)]: {
      flexDirection: "column",
    },
  },
}));

const Widget = ({ sliderData }) => {
  const classes = useStyles();
  const swiperItems = sliderData?.map((item, i) => (
    <img
      key={i}
      style={{ objectFit: "cover", height: 420, width: "100%" }}
      src={item?.pic}
      alt={item?.title}
    />
  ));
  return (
    <Grid container>
      <Grid item lg={8} md={6} xs={12}>
        <SimpleSwiper child={swiperItems} />
      </Grid>
      <Grid item lg={4} md={6} xs={12}>
        <Box display="flex" className={classes.wrapper}>
          <img className={classes.banner} src={widget1} alt="widget_off" />
          <img className={classes.banner} src={widget2} alt="widget_off" />
        </Box>
      </Grid>
    </Grid>
  );
};
export default Widget;
