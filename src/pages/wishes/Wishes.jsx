import React from "react";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import test from "assets/testProduct.jpg";
import TitleBar from "components/titleBar/TitleBar";
import { WHITE, GRAY_4 } from "constants/colors";
import CardList from "components/cardList/CardList";
import * as statements from "constants/statements";
import MetaDescriptions from "utils/MetaDescriptions";
import { BLUE_SHADOW } from "constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    backgroundColor: WHITE,
    borderRadius: 5,
    boxShadow: BLUE_SHADOW,
    padding: 20,
  },
  title: {
    fontWeight: 800,
    fontSize: 18,
    color: GRAY_4,
    marginBottom: 40,
  },
}));
function Wishes() {
  const classes = useStyles();
  const text = statements.default;

  return (
    <Box>
      <MetaDescriptions
        title={"علاقه مندی ها"}
        descriptions={"this is My Favorites page ."}
      />
      <TitleBar title={text.wishesTitle} />
      <Container maxWidth="lg">
        <Box className={classes.root}>
          <Typography variant="h5" component="h4" className={classes.title}>
            {text.wishesTitle2}
          </Typography>
          {wishesList.length === 0 ? (
            <Typography variant="body2" component="span">
              {text.emptyWishes}
            </Typography>
          ) : (
            wishesList?.map((item, i) => (
              <Box key={i}>
                <CardList name={item.name} image={item.image} />
              </Box>
            ))
          )}
        </Box>
      </Container>
    </Box>
  );
}

const wishesList = [
  {
    id: 0,
    name: "ساعت مچی عقربه ای زنانه مویا مدل w-03",
    image: test,
  },
  {
    id: 1,
    name: "ساعت مچی عقربه ای زنانه مویا مدل w-03",
    image: test,
  },
];
export default Wishes;
