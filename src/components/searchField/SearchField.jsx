import {
  makeStyles,
  Box,
  InputBase,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { GRAY_4 } from "constants/colors";
import { BLACK } from "constants/colors";
import * as statements from "constants/statements";

const useStyles = makeStyles((theme) => ({
  searchField: {
    display: "flex",
    alignItems: "center",
    background: "#f3f3f3",
    color: BLACK,
    width: "100%",
    padding: "8px 10px",
    borderRadius: 5,
    margin: "0 10px",
  },
  input: {
    width: "100%",
  },
  icon: {
    color: GRAY_4,
  },
}));

const SearchField = () => {
  const classes = useStyles();
  const text = statements.default;
  return (
    <Box className={classes.searchField}>
      <InputBase placeholder={text.findWhat} className={classes.input} />
      <SearchIcon className={classes.icon} />
    </Box>
  );
};

export default SearchField;
