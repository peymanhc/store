import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { WHITE, GRAY, GRAY_3 } from "constants/colors";
import { Link } from "react-router-dom";
import { BLUE_SHADOW } from "constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    width: "100%",
    backgroundColor: WHITE,
    borderRadius: 5,
    boxShadow: BLUE_SHADOW,
  },
  title: {
    fontWeight: 900,
    color: GRAY,
    position: "relative",
    "&:before": {
      content: "''",
      background: "#2dcea2",
      width: 40,
      float: "right",
      height: 2,
      position: "absolute",
      top: 30,
    },
  },
  listitem: {
    width: "100%",
    padding: "3px 0px",
    listStyle: "none",
    color: GRAY,
    margin: "3px 0",
    marginLeft: 10,
    "&:before": {
      content: "''",
      float: "left",
      width: 6,
      height: 6,
      background: GRAY_3,
      marginTop: 5,
      borderRadius: "100% 50% 50% 100%/75% 69% 69% 75%",
      marginRight: 8,
    },
  },
}));
const WidgetList = ({ title, listitem }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="body1" component="h4" className={classes.title}>
        {title}
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        marginTop="25px"
        alignItems="flex-start"
      >
        {listitem?.map((item, i) => (
          <Link to={item.url} key={i} className={classes.listitem}>
            {item.title}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default WidgetList;
