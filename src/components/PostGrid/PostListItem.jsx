import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import {  Divider, Chip } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Likes from "../post/Likes";
const PostListItem = ({ id, title, likes, subtitle: desc,  author, tags,thumb }) => {
  const [auth, setAuth] = useState({})
  useEffect(() => {
    async function makeRequest(){
      try {
        const athr = await axios.get(`/authors/${author}`);
        setAuth(athr.data);
     
      } catch (error) {
  
        console.error(error);
      }
    }
    makeRequest();
  }, []);
  return (
 
    <Card key={id} sx={{transition:"margin .25s ease-in-out",':hover':{marginTop:-1 }}} elevation={4}>
         <Link
    to={`/post/${id}`}
    component={RouterLink}
    color="inherit"
    sx={{ textDecoration: "none" }}
  >
      <CardHeader
        title={<span style={{ fontFamily: "cubano" ,fontSize:"1em"}}>{title}</span>}
        titleTypographyProps={{align: "left" }}
        subheader={<span style={{ color: "grey" ,fontSize: "0.7em" }}>by {auth.name}</span>}
      />
      <Divider />
     
        <img src={thumb} width="100%"></img>
    
      <Divider sx={{marginBottom:0.5,color:"black"}}/>
      <CardContent>
      {desc}
      </CardContent>
      
      {tags.length != 0 && tags.map((e) => (
          <Chip key={e} sx={{ color: "#6675e0", borderColor: "#6675e0", margin:1 }} label={e} variant="outlined" />
        ))}
         </Link>
      <CardActions
        sx={{ display: "flex", alignItems: "right", justifyContent: "right" }}
      >
        
        <Likes postid={id} count={likes}/>
          
      </CardActions>
    </Card>
   
  );
};

export default PostListItem;
