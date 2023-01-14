import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import Box from "@material-ui/core/Box";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { GRAY } from "constants/colors";
import { BLACK } from "constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
  },
  child: {
    color: GRAY,
    margin: "10px 0",
    cursor: "pointer",
    fontWeight: 800,
    "&:hover": {
      color: BLACK,
    },
  },
}));

export default function SimpleAccordion({ title, detail }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={detail !== undefined && <ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" flexDirection="column">
            {detail?.map((item, i) => (
              <Typography
                className={classes.child}
                key={i}
                variant="h6"
                component="span"
              >
                {item.title}
              </Typography>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
