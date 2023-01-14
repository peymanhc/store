import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  // RTL
  direction: "rtl",
  // END RTL
  palette: {
    primary: {
      main: "#61CE70",
      dark: "#2DCEA2",
    },
    secondary: {
      main: "#2DCEA2",
      contrastText: "#fff",
    },
    error: {
      main: "rgb(246, 0, 0)",
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#fff",
    },
  },
  overrides: {
    MuiTabs: {
      fixed: {
        overflowX: "auto !important",
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: "1.1em",
        color: "#dadada",
        backgroundColor: "#464646",
      },
    },
    MuiCheckbox: {
      colorPrimary: "#000",
    },
    MuiGrid: {
      item: {
        padding: "0 10px",
      },
    },
    MuiToolbar: {
      gutters: {
        padding: "0 !important",
      },
    },
    MuiFormLabel: {
      root: {
        color: "rgba(0,0,0,0.6)",
        border: "0",
      },
    },
    MuiCardActionArea: {
      root: {
        textAlign: "left",
      },
    },
    MuiInputBase: {
      input: {
        "&:-webkit-autofill": {
          transitionDelay: "9999s",
          transitionProperty: "background-color, color",
        },
      },
    },
    MuiButton: {
      contained: {},
      outlined: {
        borderWidth: 30,
        color: "#000",
      },
      sizeLarge: {
        minWidth: 200,
        height: 40,
        borderWidth: 3,
      },
      sizeSmall: {
        minWidth: 100,
      },
      outlinedPrimary: {
        color: "#000",
      },
    },
    MuiContainer: {
      maxWidthLg: 1400,
    },
  },
  typography: {
    h1: {
      fontSize: 45,
    },
    h2: {
      fontSize: 35,
    },
    h3: {
      fontSize: 25,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 18,
    },
    h6: {
      fontSize: 14,
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 14,
    },
    body1: {
      fontSize: 13,
    },
    body2: {
      fontSize: 12,
    },
  },
});

export default theme;
