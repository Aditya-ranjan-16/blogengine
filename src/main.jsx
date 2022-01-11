import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import App from "./App";
import Home from "./pages/Home";
import Post from "./components/post/PostViewer";
import Error from "./pages/Error";
import Author from "./components/PostGrid/PostGrid";
import CreatePost from "./components/editor/CreatePost";

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
