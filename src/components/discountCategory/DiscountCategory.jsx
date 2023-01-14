import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { GRAY_5, BLACK } from "constants/colors";
import * as statements from "constants/statements";
import moreimg from "assets/more.jpg";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    borderRadius: 5,
  },
  image: {
    width: "120px",
    height: "auto",
    borderRadius: "50%",
    border: `1px solid ${GRAY_5}`,
    padding: 15,
    objectFit: "contain",
    margin: "0 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    pointerEvents: "all",
    "&:hover": {
      opacity: 0.5,
    },
  },
  title: {
    fontSize: 16,
    marginBottom: 30,
  },
  more: {
    backgroundColor: "#c9c9c9",
    color: BLACK,
    borderRadius: "50%",
    width: "auto",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
  },
}));

const DiscountCategory = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();
  const text = statements.default;
  const Gotoshop = () => {
    history.push("/shop");
  };
  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant="body1" component="h2">
        {text.bestDiscount}
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        flexWrap="wrap"
      >
        {data?.slice(0, 7).map((item, i) => (
          <img
            className={classes.image}
            key={i}
            alt={`category$(${i})`}
            src={item.image}
          />
        ))}
        <img
          onClick={Gotoshop}
          className={classes.image}
          alt={`more...`}
          src={moreimg}
        />
      </Box>
    </Box>
  );
};

export default DiscountCategory;
