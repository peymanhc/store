import React from "react";
import {
  Box,
  InputBase,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import { GRAY } from "constants/colors";
import { GREEN_2 } from "constants/colors";
import { GRAY_5 } from "constants/colors";
import { GRAY_4 } from "constants/colors";
import * as statements from "constants/statements";
import { BLACK_SHADOW } from "constants/colors";
import { GREEN_SHADOW } from "constants/colors";

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
  rule: {
    color: GRAY_4,
  },
  commentText: {
    border: `1px solid ${GRAY_5}`,
    padding: 10,
    borderRadius: 5,
    margin: "10px 0",
  },
  label: {
    color: GRAY_4,
    margin: "10px 0",
  },
  submit: {
    backgroundColor: GREEN_2,
    color: "white",
    borderRadius: 5,
    boxShadow: GREEN_SHADOW,
    marginTop: 20,
    "&:hover": {
      backgroundColor: GREEN_2,
      boxShadow: BLACK_SHADOW,
    },
  },
}));
const Sellerquestion = () => {
  const classes = useStyles();
  const text = statements.default;
  return (
    <Box>
      <Typography className={classes.title} variant="h3" component="h2">
        {text.sellerQues}
      </Typography>
      <form style={{ marginTop: 40 }}>
        <Box display="flex" flexDirection="column">
          <InputBase
            placeholder={text.name}
            className={classes.commentText}
            name="name"
          />
          <InputBase
            placeholder={text.emailtest}
            className={classes.commentText}
            name="email"
          />
          <InputBase
            placeholder={text.quesInfo}
            className={classes.commentText}
            name="comment"
            multiline
            rows={4}
          />
          <Button className={classes.submit}>{text.quesSubmit}</Button>
        </Box>
      </form>
    </Box>
  );
};

export default Sellerquestion;
