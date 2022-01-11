import { useState, useLayoutEffect } from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import CreatePost from "../components/editor/CreatePost";
import { Select,MenuItem } from "@mui/material";
import PostGrid from "../components/PostGrid/PostGrid";

axios.defaults.baseURL = "https://krs-blogengine-api.herokuapp.com/api";

const Home = () => {
  const [authorID, setAuthorID] = useState("");
  const [authorList, setAuthorListData] = useState({
    status: "loading",
    authors: [],
  });
 
  useLayoutEffect(async () => {
    try {
      const res = await axios.get("/authors/");
      console.log(res.data);
      setAuthorListData({ status: "done", authors: res.data.authors });
      setAuthorID(res.data.authors[0].id)
      console.log(authorID)
    } catch (error) {
      setPostListData({ status: "error", message: error.message });
      console.error(error);
    }
  }, []);

  const handleAuthor=(e)=>{
   setAuthorID(e.target.value)
  }
  if (authorList.status === "loading" || authorList.status === "error") {
    return <center><CircularProgress/></center> ;
  }

  return (
    <div>
      <h1>List of all posts</h1>
      <br/>
      <Select
              value={authorID}
              sx={{ width:"50%" }}
              lable="Author"

              onChange={handleAuthor}
            >
              {authorList.authors.map((x) => (
                <MenuItem value={x.id}>{x.name}</MenuItem>
              ))}


            </Select>
  <br/>
  <br/>
        <PostGrid key={authorID} authorId={authorID}/>
        <br/>
  <br/>
       <CreatePost />
    </div>
  );
};

export default Home;
