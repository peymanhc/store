import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { GRAY } from "constants/colors";
import blankuser from "assets/blankuser.jpg";
import { Rating } from "@material-ui/lab";
import * as statements from "constants/statements";

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
  profileimg: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    objectFit: "cover",
    padding: 1,
    border: "2px solid #c4c4c4",
  },
  name: {
    color: GRAY,
    margin: "0 10px",
    fontWeight: 700,
  },
  companyName: {
    color: GRAY,
    margin: "10px 0",
  },
  rate: {
    margin: "0 40px",
  },
}));
const SellerInfo = ({ sellerinfo }) => {
  const classes = useStyles();
  const text = statements.default;
  return (
    <Box>
      <Typography className={classes.title} variant="h3" component="h2">
        {text.sellerInfo}
      </Typography>
      {sellerinfo.map((item, i) => (
        <Box key={i} marginTop="40px">
          <Box display="flex" alignItems="center">
            <img className={classes.profileimg} src={blankuser} alt="profile" />
            <Typography
              variant="body1"
              component="span"
              className={classes.name}
            >
              {item.name}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" marginTop="10px">
            <Typography
              variant="body2"
              component="span"
              className={classes.companyName}
            >
              {item.companyName}
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography
                variant="h6"
                component="span"
                className={classes.companyName}
              >
                {`${item.rate} ${text.fromRate} ${item.comments} ${text.comment}`}
              </Typography>
              <Rating
                className={classes.rate}
                precision={0.5}
                size="small"
                value={item.rate}
                readOnly
              />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SellerInfo;
