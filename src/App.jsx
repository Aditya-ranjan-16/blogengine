import {
  Toolbar,
  AppBar,
  Container,
  IconButton,
  Avatar,
  Button,
  Typography
} from "@mui/material";

import { Link, Outlet } from "react-router-dom";
import icon from "./images/coding.png"
import blog from "./images/blog.png"
import demo from "./images/demo.png"
import useMediaQuery from "@mui/material/useMediaQuery";

const App = () => {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <div style={{backgroundColor:"#12181b",height:"100%"}}>
      <AppBar position="fixed" >
      
          <Toolbar  sx={{ backgroundColor:"#2a2e35",borderBottom:"2px solid lightgreen"}}>
            <IconButton   component={Link} to={"/"} >
            <Avatar sx={{ width: matches?44:54, height: matches?44:54 }} src={icon}variant="square"></Avatar>
            </IconButton>
            
            <Avatar   sx={{ width: matches?"60%":"20%", height: matches?"60%":"20%" }} src={blog}variant="square"></Avatar>
              <span style={{flexGrow:1}}>
              <Typography align="right" >
                <Button variant="outlined" sx={{color:"#b2becd",fontSize:matches?"0.8em":"1em",borderColor:"#b2becd"}}>
               <strong><Link style={{textDecoration:"none",color:"#b2becd"}} to='/#demo'>DEMO</Link></strong>
                </Button>
              
                </Typography>
              </span>
               
          </Toolbar>
       
      </AppBar>
      <Toolbar />

      <Container  sx={{ py: 2 }}>
        <Outlet />
      </Container>
    </div>
  );
};

export default App;
