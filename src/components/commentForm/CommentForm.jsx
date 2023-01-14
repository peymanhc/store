import React, { useState } from "react";
import {
  Box,
  InputBase,
  makeStyles,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { GREEN_2,GRAY_5,GRAY_4 } from "constants/colors";
import * as statements from "constants/statements";
import { BLACK_SHADOW } from "constants/colors";
import { GREEN_SHADOW } from "constants/colors";

const useStyles = makeStyles((theme) => ({
  rule: {
    color: GRAY_4,
  },
  commentText: {
    border: `1px solid ${GRAY_5}`,
    padding: 15,
    borderRadius: 5,
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
    marginTop:20,
    "&:hover": {
      backgroundColor: GREEN_2,
      boxShadow: BLACK_SHADOW,
    },
  },
}));
const CommentForm = () => {
  const classes = useStyles();
  const text = statements.default;
  const [rate, setRate] = useState(3.5);
  const [savedata, setSavedata] = useState(false);

  return (
    <Box display="flex" flexDirection="column">
      <Box style={{ margin: "20px 0" }}>
        <Typography className={classes.rule} variant="subtitle2" component="h6">
          {text.sendYourComment}
        </Typography>
        <Typography className={classes.rule} variant="subtitle2" component="h6">
          {text.sendCommentrole}
        </Typography>
      </Box>
      <form>
        <Box display="flex" alignItems="center" marginBottom="20px">
          <Typography
            className={classes.rule}
            variant="subtitle2"
            component="h6"
          >
           {text.yourRate}
          </Typography>
          <Rating
            style={{ margin: "0 15px" }}
            size="small"
            name="rate"
            precision={0.5}
            value={rate}
            onChange={(event, newValue) => {
              setRate(newValue);
            }}
          />
        </Box>
        <Box display="flex" flexDirection="column">
          <label className={classes.label}>{text.yourComment} *</label>
          <InputBase
            className={classes.commentText}
            name="comment"
            multiline
            rows={4}
          />
          <label className={classes.label}>{text.name} *</label>
          <InputBase className={classes.commentText} name="name" />

          <label className={classes.label}>{text.email} *</label>
          <InputBase className={classes.commentText} name="email" />

          <FormControlLabel
            control={
              <Checkbox
                checked={savedata}
                onChange={() => setSavedata(!savedata)}
                name="savedata"
                style={{ color: GREEN_2 }}
              />
            }
            label={text.savedataText}
          />
          <Button className={classes.submit}>
            {text.submitComment}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CommentForm;
