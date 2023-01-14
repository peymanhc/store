import React from "react";
import { Box, makeStyles, Typography, Container } from "@material-ui/core";
import { GREEN_2, WHITE } from "constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: GREEN_2,
    width: "100%",
    height: 110,
    color: WHITE,
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontWeight: 800,
    fontSize: 29,
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      padding: 20,
    },
  },
}));
const TitleBar = ({ title }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" className={classes.title}>
          {title}
        </Typography>
      </Container>
    </Box>
  );
};

export default TitleBar;
