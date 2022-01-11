import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import {  Divider, Chip } from "@mui/material";

import axios from "axios";
import { useEffect, useState } from "react";
const PostListItem = ({ id, title, likes, subtitle: desc, Date: d, author, tags }) => {
 // const current = new Date(d);
 /* const monthname = [{ n: 0, name: "January" }, { n: 1, name: "Feburary" }, { n: 2, name: "March" }, { n: 3, name: "April" }, { n: 4, name: "May" }, { n: 5, name: "June" }, { n: 6, name: "July" }, { n: 7, name: "August" }, { n: 8, name: "September" }, { n: 9, name: "October" }, { n: 10, name: "November" }, { n: 11, name: "December" }].find((v) => {
    if (current.getMonth() == v.n) {
      return v
    }

  })*/

  //const date = `${current.getDate()} ${monthname.name} ${current.getFullYear()}`;
  const [auth, setAuth] = useState({})
  useEffect(async () => {
    try {
      const athr = await axios.get(`/authors/${author}`);
      console.log(athr.data);
      setAuth(athr.data);
    } catch (error) {

      console.error(error);
    }
  }, []);
  return (
 
  
    <Card sx={{transition:"margin .25s ease-in-out",':hover':{marginTop:-1 }}} elevation={4}>
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
     
        <img src={"https://www.garyvaynerchuk.com/wp-content/uploads/150624-The_Current_state_of_blogging_1200x628-01.png"} width="100%"></img>
    
      
      <Divider sx={{marginBottom:0.5,color:"black"}}/>
      <CardContent>
      {desc}
      </CardContent>
      
      {tags.length != 0 && tags.map((e) => (
          <Chip key={e} sx={{ color: "#6675e0", borderColor: "#6675e0", margin:1 }} label={e} variant="outlined" onClick />
        ))}
         </Link>
      <CardActions
        sx={{ display: "flex", alignItems: "right", justifyContent: "right" }}
      >
        
        <Button endIcon={<FavoriteBorder />}>{likes}</Button>
          
      </CardActions>
    </Card>
   
  );
};

export default PostListItem;
