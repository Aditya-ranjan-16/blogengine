import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import SinglePost from "./Post";
import { CircularProgress } from "@mui/material";
const PostViewer = () => {
  const postID = useParams().pid;
  const [postData, setPostData] = useState({ status: "loading" });
  const [authorData, setAuthorData] = useState({ status: "loading" });

  useEffect(async () => {
    try {
      const postRes = await axios.get(`/posts/${postID}`);
      const post = postRes.data.post;
      console.log(post);
      setPostData({ status: "done", post });

      const authorRes = await axios.get(`/authors/${post.author}`);
      const author = authorRes.data;
      console.log(author);
      setAuthorData({ status: "done", author });
    } catch (error) {
      console.log(error);
      setPostData({ status: "error", message: error.message });
    }
  }, [postID]);

  if (postData.status === "loading" || authorData.status === "loading") {
    return <center><CircularProgress/></center>;
  }

  if (postData.status === "error" || authorData.status === "error") {
    return <center><CircularProgress/></center>;
  }

  return (
    <SinglePost
      postID={postID}
      title={postData.post.title}
      subtitle={postData.post.subtitle}
      content={JSON.parse(postData.post.content)}
      author={authorData.author.name}
      likes={postData.post.likes}
      tags={postData.post.tags}
      authorID={authorData.author._id}
    />
  );
};

export default PostViewer;
