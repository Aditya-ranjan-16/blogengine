import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <AppBar position="fixed" sx={{ mb: 0 }}>
        <Container maxWidth="md">
          <Toolbar sx={{ display: "flex", gap: 2 }}>
            <IconButton component={Link} to={"/"} color="inherit">
              <HomeIcon />
            </IconButton>
            <Typography variant="h6">Blog Engine Demo</Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />

      <Container maxWidth="md" sx={{ py: 2 }}>
        <Outlet />
      </Container>
    </div>
  );
};

export default App;
