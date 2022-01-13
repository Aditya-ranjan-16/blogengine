import { useState,useEffect} from "react";
import { Grid,Box} from "@mui/material";
import logo from "../images/coding.png"
import "./home.css"
import PostListItem from "../components/PostGrid/PostListItem"
import Demo from "./Demo";
import { Grow } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import { useLocation } from 'react-router-dom';
axios.defaults.baseURL = "https://krs-blogengine-api.herokuapp.com/api";
const Home = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const location = useLocation()
  const [pData, setPData] = useState({
    id:"hh", 
    title:"", 
    likes:"", 
    subtitle:"",
    author:"61d867b67d79faf5e77ee4d1", 
    tags:"",
  });
  useEffect( () => {
      async function makeRequest(){
      try {
        const postRes = await axios.get("/posts/61dd3300891fe84ecaac4148");
        const post = postRes.data.post;
        setPData({
          
            id:post.id, 
            title:post.title, 
            likes:post.likes, 
            subtitle:post.subtitle,
            author:"61d867b67d79faf5e77ee4d1", 
            tags:post.tags,
            thumb:post.thumb
        })
       console.log("auth="+post.author);
      } catch (error) {
        console.error(error);
      }
  }
  makeRequest()
    }, []);

    useEffect(() => {
      const hash = location.hash
      // Check if there is a hash and if an element with that id exists
      const sc=document.getElementById("demo");
      
      const el = hash && document.getElementById("demo")
      console.log("changed")
      if (el) {    
          el.scrollIntoView({behavior: "smooth"})
      }
    
  }, [location])
  return (
    <div>
      
      <Grid container>
        <Grid lg={6} align="center" item>
          <img className="floating"  width= "60%" height= "100%"  src={logo} variant="square"></img>
        </Grid>
        <Grow  in={true} timeout={1000}>
        <Grid lg={6} align="left" item>
          <center>
          <Box m={6}  sx={{textAlign:"left"}} >
            <span style={{textTransform:"uppercase",color:"white",fontSize:"40px",fontFamily:"sans-serif",fontWeight:"bold"}}>
            Build Your Blog App Faster
            </span><br/><br/>
            <span style={{color:"#b2becd",fontSize:"1em"}}>
            <span style={{color:"lightgreen",fontSize:"1.3em"}}><strong>Blog</strong></span><span style={{color:"#006bf8",fontSize:"1.3em"}}><strong>Engine</strong></span> is a One Stop Component Library & Service To Make Blog Websites and  Implement Blog Functionality In Your Own website
            </span>
           </Box>
            </center> 
        </Grid>
        </Grow>
      </Grid>
   
      <br/>
      <hr className="dthr" />
      <Grid container>
     
        <Grid lg={6} align="left" item>
          <center>
          <Box m={6}  sx={{textAlign:"left"}} >
            <span style={{textTransform:"uppercase",color:"white",fontSize:"40px",fontFamily:"sans-serif",fontWeight:"bold"}}>
           Designs To Choose from
            </span><br/><br/>
            <span style={{color:"#b2becd",fontSize:"1em"}}>
            A Suite Of Design And themes To Choose for Displaying And Viewing Blog posts
            </span>
           </Box>
            </center> 
        </Grid>
        <Grid  lg={6} align="left" sx={{padding:matches?1:10}} item>
          <div  className="shadowlight">
           
          <PostListItem  {...pData}/>
          </div>
        </Grid>
      </Grid>
      <hr style={{marginTop:matches?32:0}} className="dthr" />
      <center><span id="demo" style={{color:"white",fontSize:"40px",fontFamily:"sans-serif",fontWeight:"bold"}}>DEMO</span></center> 

     <Demo/>
   
     
    </div>
  );
};

export default Home;
