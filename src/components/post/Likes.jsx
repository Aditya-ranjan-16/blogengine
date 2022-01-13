import {Button} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from "axios";
import { useState,useEffect } from "react";
const Likes=({postid,count})=>{
    const [liked,setLiked]=useState(false)
    const [counter,setCounter]=useState(count)
    
useEffect(()=>{
    const likes=localStorage.getItem("likes");
    if(likes==null){
        localStorage.setItem("likes", "none");
    }else{
       if(likes.split(",").includes(postid)){
           setLiked(true)
       }
    }
},[])
    
    const onLike=async()=>{
        let currentlikes=localStorage.getItem("likes")
        if(currentlikes==null){
            localStorage.setItem("likes", postid.toString());
            setLiked(true)
            setCounter(counter+1)
        }
        if(liked){

          let newlikes=currentlikes.split(",").filter(el => el !== postid)
          if(newlikes.length==0){
            localStorage.setItem("likes", "none");
          }else{
            localStorage.setItem("likes", newlikes.toString());
          }
          setLiked(false)
          
         if(counter>0) setCounter(counter-1)
        }else{
            if(currentlikes==="none"){
                localStorage.setItem("likes", postid.toString());
            }else{
                let newlikes2=currentlikes.split(",")
                newlikes2[newlikes2.length]=postid
               localStorage.setItem("likes", newlikes2.toString());
            }
         
           setLiked(true)
           setCounter(counter+1)
        }
        console.log(liked)
        try {
            const res = await axios.patch("posts/likes/update", {postId:postid,like:!liked});
            
          } catch (error) {
            alert(error)
          }


    }
         
    return(
        <Button
        sx={{color:"blue"}}
        size="large"
        color="inherit"
        endIcon={liked?<FavoriteIcon sx={{color:"red"}} />:<FavoriteBorderIcon/>}
        onClick={onLike}
      >
       {counter}
      </Button>
    )

}

export default Likes;