import {
  Toolbar,
  AppBar,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
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
