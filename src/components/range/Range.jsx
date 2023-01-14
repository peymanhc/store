import React from "react";
import { WHITE, SHADOW_BLACK, GRAY_5, GREEN_2 } from "constants/colors";
import { makeStyles } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
const useStyles = makeStyles((theme) => ({
  "@global": {
    ".MuiSlider-thumb": {
      backgroundColor: WHITE,
      boxShadow: SHADOW_BLACK,
      border: `1px solid ${GRAY_5}`,
      width: 20,
      height: 20,
      marginTop: -10,
    },
    ".MuiSlider-root": {
      color: GREEN_2,
      height: 5,
    },
    ".MuiSlider-track": {
      height: 5,
    },
  },
}));

const Range = ({ value, onChange }) => {
  useStyles();
  return (
    <Slider
      value={value}
      onChange={onChange}
      aria-labelledby="range-slider"
      max={1500}
      min={0}
    />
  );
};

export default Range;
