import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Container,
  Box,
  Toolbar,
  Typography,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link } from "react-router-dom";
import { PRIMARY, GRAY_3 } from "constants/colors";
import Elementors from "constants/elementor";
import * as statements from "constants/statements";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 50,
    height: 50,
    borderBottom: "1px solid rgba(0,0,0,0.05)",
  },
  wrapper: {
    minHeight: 50,
    height: 50,
    display: "flex",
    flexDirection: "row",
    textDecoration: "none",
    width: "100%",
    justifyContent: "space-between",
  },
  linkText: {
    width: "auto",
    height: "100%",
    "&:hover": {
      background: "transparent",
    },
  },
  list: {
    display: "flex",
  },
  listitem: {
    textTransform: "capitalize",
    color: GRAY_3,
    fontSize: 14,
    transition: "0.3s",
    "&:hover": {
      color: PRIMARY,
      cursor: "pointer",
      transition: "0.3s",
    },
  },
  contact: {
    color: GRAY_3,
    margin: "0 7px",
  },
}));

const Elementor = () => {
  const classes = useStyles();
  const text = statements.default;
  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Toolbar className={classes.wrapper}>
          <Box display="flex">
            <Box display="flex" alignItems="center">
              <PhoneIcon color="secondary" />
              <Typography
                variant="subtitle2"
                component="p"
                className={classes.contact}
              >
               {text.phone}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <MailOutlineIcon color="secondary" />
              <Typography
                variant="subtitle2"
                component="p"
                className={classes.contact}
              >
                {text.webEmail}
              </Typography>
            </Box>
          </Box>
          <List className={classes.list}>
            {Elementors.map((item, i) => (
              <ListItem key={i} className={classes.linkText}>
                <a href={item.url}>
                  <ListItemText
                    classes={{ primary: classes.listitem }}
                    primary={item.title}
                  />
                </a>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Elementor;
