import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { GRAY_3 } from "constants/colors";

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: "uppercase",
    color: "#4a5f73",
    marginBottom: 0,
    fontWeight: 800,
    margin: "20px auto",
    "&:before": {
      content: "''",
      float: "left",
      width: 10,
      height: 10,
      background: "#2dcea2",
      borderRadius: "100% 50% 50% 100%/75% 69% 69% 75%",
      marginTop: 8,
      marginRight: 8,
    },
  },
  linkText: {
    width: "100%",
    padding: "3px 0px",
    listStyle: "none",
    color: "#919191",
    fontSize: "13px",
    "&:before": {
      content: "''",
      float: "right",
      width: 6,
      height: 6,
      background: GRAY_3,
      borderRadius: "100% 50% 50% 100%/75% 69% 69% 75%",
      marginRight: 8,
    },
  },
}));
const ProductProperty = ({ title, child }) => {
  const classes = useStyles();
  return (
    <Box marginTop="50px" >
      <Typography className={classes.title} variant="h6" component="h5">
        {title}
      </Typography>
      <List>
        {child?.map((item, i) => (
          <ListItem key={i} className={classes.linkText}>
            <ListItemText
              classes={{ primary: classes.listitem }}
              primary={item.title}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProductProperty;
