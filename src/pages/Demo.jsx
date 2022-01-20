import { useState, useEffect,Fragment } from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import CreatePost from "../components/editor/CreatePost";
import { Select, MenuItem,Box} from "@mui/material";
import PostGrid from "../components/PostGrid/PostGrid";
import useMediaQuery from "@mui/material/useMediaQuery";


const Demo=()=>{
  const matches = useMediaQuery("(max-width:600px)");
    const [authorID, setAuthorID] = useState({
        id:"61d867b67d79faf5e77ee4d1",
        name:"Aditya Ranjan"
    });
    const [authorList, setAuthorListData] = useState({
      status: "loading",
      authors: [],
    });
  
    useEffect( () => {
        async function makeRequest(){
        try {
          const res = await axios.get("/authors/");
          console.log(res.data);
          setAuthorListData({ status: "done", authors: res.data.authors });
          setAuthorID({
              id:res.data.authors[0].id,
              name:res.data.authors[0].name
          })
        } catch (error) {
          setAuthorListData({ status: "error", message: error.message });
          console.error(error);
        }
    }
    makeRequest()
      }, []);
    
      const handleAuthor = (e) => {
        setAuthorID(e.target.value)
      }
      if (authorList.status === "loading" || authorList.status === "error") {
        return <center><CircularProgress /></center>;
      }
    return(<Fragment>
<br />
      <span style={{color:"#b2becd",fontSize:"1em"}}>
            Select a Author
            </span><br/>
      <Select
        value={authorID}
        sx={{width: "50%" ,backgroundColor:"white"}}
        lable="Author"
        onChange={handleAuthor}
      >
        {authorList.authors.map((x) => (
          <MenuItem value={x}>{x.name}</MenuItem>
        ))}

       
      </Select>
      <br />
      <br />
      <span style={{color:"white",fontSize:"30px",fontFamily:"sans-serif",fontWeight:"bold"}}>PostGrid Component & Viewer Component</span>
      <br/><span style={{color:"#b2becd",fontSize:"1em"}}>
            A Component To display all the Blog posts In a Grid Fashion based on given author credentials <br/><br/>
            <strong>Click Any Post To Open Viewer</strong>
            </span>
      <Box p={matches?1:5} >
      <PostGrid key={authorID.id} authorId={authorID.id} />
      </Box>
     
      <br />
      <br />
      <span style={{color:"white",fontSize:"30px",fontFamily:"sans-serif",fontWeight:"bold"}}>CreatePost Component </span>
      <br/><span style={{color:"#b2becd",fontSize:"1em"}}>
            A Component To Author and Publish Your Blog posts It Comes With A Exquisite Powerfull Editor
            </span>
            <br/>
            <br/>
      <CreatePost key={authorID.id} authorID={authorID.id} />
    </Fragment>

    )

}

export default Demo;