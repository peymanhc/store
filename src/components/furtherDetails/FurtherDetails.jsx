import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { GRAY } from "constants/colors";
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
  description: {
    display: "flex",
    alignItems: "center",
    margin: "30px 100px",
  },
  child: {
    backgroundColor: GRAY_6,
    padding: "15px 20px",
    borderRadius: 6,
    marginLeft: 50,
    width: "100%",
  },
}));
const FurtherDetails = ({ data }) => {
  const classes = useStyles();
  const text = statements.default;
  return (
    <Box>
      <Typography className={classes.title} variant="h3" component="h2">
        {text.allDescriptions}
      </Typography>
      {data?.map((item, i) => (
        <Box key={i} className={classes.description}>
          <Typography variant="body1" component="p">
            {item.name}
          </Typography>
          <Box display="flex" alignItems="center" className={classes.child}>
            <Typography variant="body1" component="p">
              {item.child}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default FurtherDetails;
