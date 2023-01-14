import MegaMenuItems from "constants/megaMenu";
import React from "react";
import "./styles.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button, makeStyles } from "@material-ui/core";
import { GREEN } from "constants/colors";
import { useHistory } from "react-router-dom";
import * as statements from "constants/statements";
import SettingsIcon from "@material-ui/icons/Settings";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wrapper: {
    width: "100%",
  },
  discountItems: {
      width:265,
    backgroundColor: GREEN,
    color: "#2DCEA2",
    padding: "8px 15px",
    fontWeight: 100,
    "&:hover": {
      backgroundColor: GREEN,
    },
  },
  discountItemsIcon: {
    fontSize: 15,
    marginRight: 10,
  },
  childbox: {
    display: "flex !important",
    justifyContent: "space-between !important",
    width: "100% !important",
    left: "33% !important",
    backgroundColor: "white",
    flexWrap: "wrap",
    height: "auto !important",
    padding: 20,
  },
  childs: {
    display: "flex",
    width: "50%",
    height: 50,
    alignItems: "center",
  },
  title: {
    textTransform: "uppercase",
    color: "#4a5f73",
    cursor: "pointer",
    "&:before": {
      content: "''",
      float: "left",
      width: 10,
      height: 10,
      background: "#2dcea2",
      borderRadius: "100% 50% 50% 100%/75% 69% 69% 75%",
      marginTop: 5,
      marginRight: 8,
    },
    "&:hover": {
      color: "black",
    },
  },
}));

const MegaMenu = () => {
  const classes = useStyles();
  const history = useHistory();
  const text = statements.default;
  const gotoDiscount = () => {
    history.push("/SpecialDiscount");
  };
  return (
    <Box className={classes.root}>
      <nav className={classes.wrapper}>
        <ul className="menu menu-bar">
          {MegaMenuItems.map((item, i) => (
            <li key={i}>
              <a
                href="javascript:void(0);"
                className="menu-link menu-bar-link"
                aria-haspopup="true"
              >
                {item?.title}{" "}
                {item?.children !== undefined && (
                  <ExpandMoreIcon
                    className={classes.listitem}
                    style={{ marginRight: "5px" }}
                  />
                )}
              </a>
              <ul className="mega-menu mega-menu--multiLevel">
                {item?.children?.map((index, key) => (
                  <li key={key} >
                    <a
                      href="javascript:void(0);"
                      className="menu-link mega-menu-link"
                      aria-haspopup="true"
                    >
                      {index.title}
                    </a>
                    <ul className="menu menu-list">
                      {index?.items?.map((item, i) => (
                        <li key={i} >
                          <a
                            href="/page"
                            className={`${classes.title} menu-link menu-list-link`}
                          >
                            {item?.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
      <Button onClick={() => gotoDiscount()} className={classes.discountItems}>
        <SettingsIcon className={classes.discountItemsIcon} />
        {text.takhfif}
      </Button>
    </Box>
  );
};

export default MegaMenu;
