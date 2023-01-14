import React from "react";
import { Box, makeStyles, Typography, Grid } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import blankuser from "assets/blankuser.jpg";
import { GRAY,WHITE,GRAY_5,GREEN_2,GRAY_3 } from "constants/colors";
import CommentForm from "components/commentForm/CommentForm";
import * as statements from "constants/statements";
import { GRAY_6 } from "constants/colors";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 18,
    fontWeight: 400,
    color: GRAY,
    position: "relative",
    "&:before": {
      content: "''",
      background: "#2dcea2",
      width: 40,
      float: "right",
      height: 2,
      position: "absolute",
      top: 36,
    },
  },
  rules: {
    backgroundColor: GRAY_6,
    width: "100%",
    padding: "30px",
    color: GRAY,
    borderRadius: 6,
  },
  commentBox: {
    borderRadius: 6,
    backgroundColor: WHITE,
    padding: 20,
    border: `1px solid ${GRAY_5}`,
  },
  titlerolues: {
    textTransform: "uppercase",
    color: "#4a5f73",
    marginBottom: 10,
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
  profileimg: {
    backgroundColor: GREEN_2,
    padding: 5,
    width: 50,
    height: 50,
    borderRadius: "50%",
    objectFit: "cover",
  },
  text: {
    margin: "0 15px",
    flex: 1,
  },
  name: {
    color: GRAY,
    fontSize: 12,
  },
  commentText: {
    marginTop: 10,
    fontSize: 13,
  },
  rate: {
    fontSize: 18,
  },
  rulestxt: {
    width: "100%",
    padding: "3px 0px",
    listStyle: "none",
    color: GRAY,
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
const Comments = ({ comments }) => {
  const classes = useStyles();
  const text = statements.default;
  return (
    <Box>
      <Typography className={classes.title} variant="h3" component="h2">
        {text.userComments}
      </Typography>
      <Grid container style={{ marginTop: "40px" }}>
        <Grid item md={6} xs={12}>
          <Box className={classes.rules}>
            <Typography
              className={classes.titlerolues}
              variant="h5"
              component="h5"
            >
              {text.commentRole}
            </Typography>
            <Typography className={classes.rulestxt} variant="h6" component="p">
              {text.commentRole_1}
            </Typography>
            <Typography className={classes.rulestxt} variant="h6" component="p">
              {text.commentRole_2}
            </Typography>
            <Typography className={classes.rulestxt} variant="h6" component="p">
              {text.commentRole_3}
            </Typography>
          </Box>
          <CommentForm />
        </Grid>
        <Grid item md={6} xs={12}>
          <Box className={classes.commentBox}>
            <Typography className={classes.title} variant="h5" component="h5">
              {text.comments}
            </Typography>
            {comments.map((item, i) => (
              <Box
                key={i}
                display="flex"
                margin="20px 40px"
                padding="20px 0"
                borderBottom={`1px solid ${GRAY_5}`}
              >
                <img
                  className={classes.profileimg}
                  src={blankuser}
                  alt="profile"
                />
                <Box className={classes.text}>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.name}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    className={classes.commentText}
                  >
                    {item.comment}
                  </Typography>
                </Box>
                <Rating name="rate" className={classes.rate} value={item.rate} readOnly />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Comments;
