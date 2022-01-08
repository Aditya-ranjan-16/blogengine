import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Set up axios
import axios from "axios";
axios.defaults.baseURL = "http://krs-blogengine-api.herokuapp.com/api";

import App from "./App";

// Just use the default theme
const theme = createTheme({});

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline enableColorScheme />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
