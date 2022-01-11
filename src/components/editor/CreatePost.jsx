import {
  Box,
  Button,
  TextField,
  CircularProgress,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardHeader,
  CardContent,
  Chip,
  Stack
} from "@mui/material";
import { useState, useEffect,useRef } from "react";
import Editor from "./Editor";
import useMediaQuery from '@mui/material/useMediaQuery'
import axios from "axios";
import "./Createpost.css";
const CreatePost = () => {
  const matches = useMediaQuery('(max-width:600px)');
  const [authorID, setAuthorID] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [tags, setTags] = useState([]);
  const [postContent, setPostContent] = useState("");
  const tagfield=useRef("");

  const [authorList, setAuthorListData] = useState({
    status: "loading",
    authors: [],
  });
  useEffect(async () => {
    try {
      const res = await axios.get("/authors/");
      console.log(res.data);
      setAuthorListData({ status: "done", authors: res.data.authors });
    } catch (error) {

      console.error(error);
    }
  }, []);

  if (authorList.status === "loading" || authorList.status === "error") {
    return <center><CircularProgress /></center>;
  }

  const handleSubmit = async (e) => {
    const postObject = {
      title,
      subtitle,
      content: postContent,
      auth: authorID,
      tags: tags,
    };
    console.log(postObject);
    setAuthorID("");
    setTitle("");
    setSubtitle("");
    setTags([" "]);
    setPostContent("");

    e.preventDefault();
    let newURL = "/";
    try {
      const res = await axios.post("/posts/", postObject);
      console.log(res);
      newURL = `/post/${res.data.post._id}`;
    } catch (error) {
      console.error(error);
    }

    window.location.assign(newURL);
  };

const TagHandelar=()=>{
  if(tagfield.current.value!=""){
    let has="#".concat(tagfield.current.value)
    setTags([...tags,has])
    tagfield.current.value=""
  }
   
};

const handleDelete=(e)=>{
    console.log(e)
    setTags(tags.filter(item => item !== e))
   
};
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "stretch",
        border:"2px solid lightgreen",
        borderRadius:"20px",
        padding:2
      }}
    >


      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
            }}
          >
            <TextField
              label="Title"
              variant="outlined"
              sx={{ width: "90%" }}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <Button
              variant="contained"
              color="success"
              component="button"
              type="submit"
            >
              Publish
            </Button>
          </Box>
          <InputLabel sx={{ color: "black" }} id="demo-simple-select-label"><strong>Select Author</strong></InputLabel>
          <Box
            sx={{
              display: "flex",
              flexDirection: matches?"column":"row",
              gap: 2,
              alignItems: "center",
            }}
          >

            <Select
              value={authorID}
              sx={{ width: matches?"100%":"50%" }}
              lable="Author"

              onChange={(e) => setAuthorID(e.target.value)}
            >
              {authorList.authors.map((x) => (
                <MenuItem value={x.id}>{x.name}</MenuItem>
              ))}


            </Select>
            <Card elevation={0} sx={{ width:matches? "100%":"50%" , border:"1px solid grey" }}>
              <CardHeader title={
                 <Box
                 sx={{
                   display: "flex",
                   flexDirection: matches?"column":"row",
                   gap: 2,
                  
                 }}
               >
                <TextField
                  sx={{ width: matches?"100%":"70%"}}
                  label="Add Tags "
                  variant="outlined"
                
                  inputRef={tagfield}
                />
                <Button
              variant="outlined"
              color="success"
              component="button"
              onClick={TagHandelar}
            >
              Add
            </Button>
                </Box>

              }>
                </CardHeader>
              <CardContent  className="tagCont">
              <Stack sx={{overflowX:"scroll"}} direction="row" spacing={2}>
                {tags.length!=0 && tags.map((e)=>(
               <Chip sx={{color:"blue",borderColor:"blue"}} label={e} variant="outlined" onDelete={()=>handleDelete(e)}  />
                ))}
                </Stack>
              </CardContent>
              
            </Card>

          </Box>


          <TextField
            label="Subtitle"
            variant="standard"
            multiline
            rows={2}
            onChange={(e) => setSubtitle(e.target.value)}
            value={subtitle}
          />
        </Box>
      </form>

      <Editor onChange={setPostContent} value={postContent} />
    </Box>
  );
};

export default CreatePost;
