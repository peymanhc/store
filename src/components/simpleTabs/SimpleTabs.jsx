import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { WHITE } from "constants/colors";
import { GREEN_2 } from "constants/colors";
import { BLACK } from "constants/colors";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: `${WHITE} !important`,
    boxShadow: "none",
    overflowX:"auto"
  },
  tab: {
    borderRadius: 5,
    minWidth: "auto",
    minHeight: 40,
    padding: "4px 15px",
    margin: "0 10px",
  },
}));

export default function SimpleTabs({ tabs, panel }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.root} style={{height:70}} position="static">
        <Tabs
          value={value}
          TabIndicatorProps={{ style: { display: "none" } }}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {tabs.map((item, i) => (
            <Tab
              className={classes.tab}
              style={{
                backgroundColor: value === item.id ? GREEN_2 : "",
                color: value === item.id ? WHITE : BLACK,
              }}
              key={i}
              label={
                <Box display="flex" alignItems="center">
                  {item.icon}
                  <Typography
                    variant="body2"
                    component="span"
                    style={{ marginRight: 10 }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              }
              {...a11yProps(item.id)}
            />
          ))}
        </Tabs>
      </AppBar>
      {panel.map((item, i) => (
        <TabPanel key={i} value={value} index={item.id}>
          {item.child}
        </TabPanel>
      ))}
    </div>
  );
}
