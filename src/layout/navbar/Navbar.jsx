import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Button,
  makeStyles,
  Container,
  Box,
  Typography,
  IconButton,
  Hidden,
  Badge,
  Collapse,
} from "@material-ui/core";
import Logo from "assets/Logo.png";
import { Link, useHistory } from "react-router-dom";
import { GRAY, BLACK, SECONDARY } from "constants/colors";
import Elementor from "./Elementor";
import SearchField from "components/searchField/SearchField";
import MegaMenu from "components/mega/MegaMenu";
import Drawer from "components/drawer/Drawer";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MenuIcon from "@material-ui/icons/Menu";
import { WHITE } from "constants/colors";
import * as statements from "constants/statements";
import { GREEN_SHADOW } from "constants/colors";
import { UseBlogList } from "hooks/blog";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: WHITE,
    color: BLACK,
    borderBottom: "1px solid rgba(0,0,0,0.05)",
    boxShadow: "0px 7px 8px 0px rgba(0, 0, 0, 0.04)",
  },
  wrapper: {
    marginTop: 7,
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
  logobox: {
    cursor: "pointer",
    minWidth: 230,
    width: "45%",
    display: "flex",
    alignItems: "center",
    color:"black"
  },
  logo: {
    width: 50,
    height: 50,
    margin: "0 5px",
    objectFit: "contain",
  },
  list: {
    display: "flex",
  },
  listitem: {
    fontSize: 15,
    textTransform: "capitalize",
    color: GRAY,
    "&:hover": {
      color: BLACK,
      cursor: "pointer",
    },
  },
  searchField: {
    background: "#f3f3f3",
    color: BLACK,
  },
  iconlinks: {
    color: "rgba(0,0,0,0.7)",
    fontSize: 26,
  },
  loginBtn: {
    backgroundColor: theme.palette.primary.dark,
    color: WHITE,
    padding: "10px 8px",
    boxShadow: `${GREEN_SHADOW} !important`,
    display: "flex",
    width: 150,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("xs")]: {
      width: 100,
      fontSize: 12,
    },
  },
  paper: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: WHITE,
    borderRadius: 5,
    padding: "5px 20px",
  },
  "@global": {
    ".MuiIconButton-root:hover": {
      backgroundColor: "transparent",
    },
    ".MuiCollapse-entered": {
      top: 55,
      position: "absolute",
      zIndex: 9,
      right: 0,
    },
    ".MuiCollapse-container": {
      top: 55,
      right: -80,
      position: "absolute",
      zIndex: 9,
      width: 310,
      boxShadow: "0px 2px 20px rgba(0,0,0,0.15)",
    },
  },
  blogItems: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: 15,
  },
  blogitemTitle: {
    textTransform: "uppercase",
    color: "#4a5f73",
    marginBottom: 10,
    cursor: "pointer",
    "&:before": {
      content: "''",
      float: "left",
      width: 8,
      height: 8,
      background: "#2dcea2",
      borderRadius: "100% 50% 50% 100%/75% 69% 69% 75%",
      marginTop: 10,
      marginRight: 8,
    },
  },
}));
const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [collapse, setCollapse] = React.useState(false);
  const text = statements.default;
  const { data: blogList, isLoading: blogLoading } = UseBlogList("", "");
  const handleCollapse = () => {
    setCollapse((prev) => !prev);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const returnHome = () => {
    history.replace("/");
  };
  return (
    <AppBar className={classes.root} position="static">
      <Drawer
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        open={open}
      />
      <Hidden mdDown>
        <Elementor />
      </Hidden>
      <Container maxWidth="lg">
        <Toolbar className={classes.wrapper}>
          <a className={classes.logobox} href="/">
            <img className={classes.logo} src={Logo} alt="pishgaman" />
            <Typography variant="subtitle1" component="p">
              {text.pishgaman}{" "}
              <span style={{ color: SECONDARY }}>{text.damane}</span>
            </Typography>
          </a>
          <SearchField />
          <Hidden mdDown>
            <Box
              width="70%"
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Link to="/wishes">
                <IconButton aria-label="FavoriteBorder" component="span">
                  <FavoriteBorderIcon className={classes.iconlinks} />
                </IconButton>
              </Link>
              <Link to="/basket">
                <IconButton aria-label="ShoppingBasket" component="span">
                  <Badge badgeContent={1} color="secondary">
                    <ShoppingBasketIcon className={classes.iconlinks} />
                  </Badge>
                </IconButton>
              </Link>
              <Box width="60px" position="relative">
                <Collapse timeout={1000} in={collapse}>
                  <Box elevation={4} className={classes.paper}>
                    <Box className={classes.blogItems}>
                      {blogList?.post?.slice(0, 5)?.map((item, i) => (
                        <Link
                          onClick={handleCollapse}
                          key={i}
                          to={`/blog/${item.id}`}
                        >
                          <Typography
                            className={classes.blogitemTitle}
                            variant="h6"
                            component="h3"
                          >
                            {item.title}
                          </Typography>
                        </Link>
                      ))}
                    </Box>
                  </Box>
                </Collapse>
                <IconButton
                  onClick={handleCollapse}
                  aria-label="Info"
                  component="span"
                >
                  <ErrorOutlineIcon className={classes.iconlinks} />
                </IconButton>
              </Box>
              <Link to="/auth" style={{ marginRight: 10 }}>
                <Button className={classes.loginBtn}>
                  <PersonOutlineIcon style={{ marginLeft: "5px" }} />
                  {text.login}
                </Button>
              </Link>
            </Box>
          </Hidden>
        </Toolbar>
        <Hidden mdDown>
        <MegaMenu />
        </Hidden>
        <Hidden lgUp>
          <Box
            width="100%"
            display="flex"
            padding="0 10px"
            alignItems="center"
            justifyContent="space-between"
          >
            <IconButton onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <Box display="flex" alignItems="center">
              <Link to="/wishes">
                <IconButton>
                  <FavoriteBorderIcon className={classes.iconlinks} />
                </IconButton>
              </Link>
              <Link to="/basket">
                <IconButton>
                  <Badge badgeContent={1} color="secondary">
                    <ShoppingBasketIcon className={classes.iconlinks} />
                  </Badge>
                </IconButton>
              </Link>
              <Link to="/blog/0">
                <IconButton>
                  <ErrorOutlineIcon className={classes.iconlinks} />
                </IconButton>
              </Link>
              <Link to="/auth" style={{ marginRight: 10 }}>
                <Button className={classes.loginBtn}>{text.login}</Button>
              </Link>
            </Box>
          </Box>
        </Hidden>
      </Container>
    </AppBar>
  );
};
export default Navbar;
