import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

// Set up axios
axios.defaults.baseURL = "https://krs-blogengine-api.herokuapp.com/api";

import App from "./App";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Error from "./pages/Error";
import Author from "./pages/Author";
import CreatePost from "./pages/CreatePost";

// Just use the default theme
const theme = createTheme({});

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline enableColorScheme />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="post/:pid" element={<Post />} />
            <Route path="post/new" element={<CreatePost />} />
            <Route path="author/:aid" element={<Author />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
