import React from "react";
import { Box, makeStyles, Typography, Divider } from "@material-ui/core";
import { WHITE, GRAY, GRAY_4, GRAY_3 } from "constants/colors";
import { BLUE_SHADOW } from "constants/colors";
import { Link } from "react-router-dom";
import { BLACK } from "constants/colors";

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
  group: {
    margin: "20px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  arshiveImage: {
    width: 120,
    height: 120,
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: "50%",
    margin: "10px 0",
  },
  arshiveTitle: {
    margin: "10px 0",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 2,
    color: GRAY_4,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
  arshiveDate: {
    color: GRAY_3,
    margin: "10px 0",
  },
  arshiveListposts: {
    display: "flex",
    alignItems: "flex-start",
    margin: "8px 0",
    cursor: "pointer",
    color: BLACK,
  },
  postsimage: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    objectFit: "cover",
  },
  postTitle: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
}));

const Arshive = ({ arshiveimg, arshiveTitle, arshiveDate, posts, title }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="body1" component="h4" className={classes.title}>
        {title}
      </Typography>
      <Box className={classes.group}>
        <img
          className={classes.arshiveImage}
          alt="arshiveTitle"
          src={arshiveimg}
        />
        <Typography
          className={classes.arshiveTitle}
          variant="h5"
          component="h6"
        >
          {arshiveTitle}
        </Typography>
        <Typography
          className={classes.arshiveDate}
          variant="body2"
          component="span"
        >
          {arshiveDate}
        </Typography>
        <Divider style={{ width: "100%" }} />
      </Box>
      {posts?.slice(0, 8)?.map((item, i) => (
        <a
          href={`/blog/${item.id}`}
          key={i}
          className={classes.arshiveListposts}
        >
          <img
            className={classes.postsimage}
            alt="blog_post"
            src={item.thumb}
          />
          <Box display="flex" flexDirection="column" padding="0 20px">
            <Typography
              className={classes.postTitle}
              variant="body1"
              component="p"
            >
              {item.title}
            </Typography>
            <Typography
              className={classes.arshiveDate}
              variant="body2"
              component="span"
            >
              {item.date}
            </Typography>
          </Box>
        </a>
      ))}
    </Box>
  );
};

export default Arshive;
