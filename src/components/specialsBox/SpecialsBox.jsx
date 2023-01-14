import React from "react";
import { Box, makeStyles, Grid, Container, Button } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import SpecialSlider from "components/specialSlider/SpecialSlider";
import { WHITE } from "constants/colors";
import * as statements from "constants/statements";
const useStyles = makeStyles((theme) => ({
  root: {
    color: WHITE,
    width: "100%",
    minHeight: "50px",
    display: "flex",
    alignItems: "center",
    padding: "30px",
  },
  banner: {
    width: 170,
    height: 300,
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  showmore: {
    color: WHITE,
    borderRadius: 10,
    padding: "9px 16px",
    border: `1px solid ${WHITE}`,
    fontWeight: 700,
    marginTop: 20,
  },
}));
const SpecialsBox = ({ bgColor, banner, Childs }) => {
  const classes = useStyles();
  const text = statements.default;
  return (
    <Box style={{ backgroundColor: bgColor }} className={classes.root}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={2} xs={12}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
              height="100%"
            >
              <img
                className={classes.banner}
                src={banner}
                alt={"specials_Banner"}
              />
              <Button className={classes.showmore}>
                {text.showall}
                <KeyboardArrowLeftIcon />
              </Button>
            </Box>
          </Grid>
          <Grid item md={10} xs={12}>
            <SpecialSlider renderItem={4} cardType={1} child={Childs} /> 
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default SpecialsBox;
