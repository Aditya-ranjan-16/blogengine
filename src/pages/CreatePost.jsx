import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Editor from "../components/editor/Editor";

import axios from "axios";

const CreatePost = () => {
  const [authorID, setAuthorID] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [tags, setTags] = useState("");
  const [postContent, setPostContent] = useState("");

  const handleSubmit = async (e) => {
    const postObject = {
      title,
      subtitle,
      content: postContent,
      auth: authorID,
      tags: tags.split(/\s+/),
    };
    console.log(postObject);
    setAuthorID("");
    setTitle("");
    setSubtitle("");
    setTags("");
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "stretch",
      }}
    >
      <Editor onChange={setPostContent} value={postContent} />
      <Divider />
      <Card variant="outlined">
        <CardHeader title="Enter details for post" />
        <Divider />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "stretch",
              }}
            >
              <TextField
                label="Author ID"
                variant="filled"
                onChange={(e) => setAuthorID(e.target.value)}
                value={authorID}
              />

              <TextField
                label="Title"
                variant="filled"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />

              <TextField
                label="Subtitle"
                variant="filled"
                onChange={(e) => setSubtitle(e.target.value)}
                value={subtitle}
              />

              <TextField
                label="Tags (space separated)"
                variant="filled"
                onChange={(e) => setTags(e.target.value)}
                value={tags}
              />

              <Button
                variant="contained"
                color="success"
                component="button"
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreatePost;
