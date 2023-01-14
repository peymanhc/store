import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// components
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  number: {
    userSelect: "none",
  },
  numberroot: {
    padding: "6px",
    width: "auto",
    justifyContent: "space-between",
  },
}));

function NumberInput({
  min = 0,
  max,
  value = min,
  onChange = () => {},
  className,
}) {
  const classes = useStyles();
  const [_count, setCount] = useState(value);

  const onAddValue = () => {
    setCount((prevState) => {
      const newValue = ++prevState;
      onChange(newValue);
      return newValue;
    });
  };

  const onReduceValue = () => {
    setCount((prevState) => {
      const newValue = --prevState;

      onChange(newValue);
      return newValue;
    });
  };
  useEffect(() => {
    setCount(value);
  }, [value]);

  return (
    <Paper elevation={0} variant="outlined">
      <Box className={classes.numberroot} display="flex" alignItems="center">
        <Button
          size="small"
          color="default"
          onClick={onAddValue}
          disabled={max <= _count ? true : false}
          className={className}
          style={{ minWidth: 10 }}
        >
          +
        </Button>
        <Box>
          <Typography component="span" variant="button">
            {_count}
          </Typography>
        </Box>
        <Button
          disabled={min === _count ? true : false}
          size="small"
          color="default"
          onClick={onReduceValue}
          className={className}
          style={{ minWidth: 10 }}
        >
          -
        </Button>
      </Box>
    </Paper>
  );
}

export default NumberInput;
