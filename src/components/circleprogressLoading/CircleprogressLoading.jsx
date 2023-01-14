import { Box, CircularProgress } from "@material-ui/core";
import React from "react";

const CircleprogressLoading = () => {
  return (
    <Box width="100%" justifyContent="center" display="flex" margin="20px 0">
      <CircularProgress />
    </Box>
  );
};

export default CircleprogressLoading;
