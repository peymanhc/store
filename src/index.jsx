import React from "react";
import ReactDOM from "react-dom";
import { ReactQueryDevtools } from "react-query-devtools";
import "./styles.css";
import Routes from "routes/routes";
import theme from "./theme";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Loading from "components/Loading/Loading";
import * as swDev from "./swDev";
// RTL
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
const RTLMode = create({ plugins: [...jssPreset().plugins, rtl()] });
// END RTL

ReactDOM.render(
  <StylesProvider jss={RTLMode}>
    <React.Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
      <ReactQueryDevtools />
    </React.Suspense>
  </StylesProvider>,
  document.getElementById("root")
);
// swDev();
