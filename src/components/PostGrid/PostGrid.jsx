import { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import PostList from "./PostList";

const PostGrid = ({authorId}) => {
  const aid = authorId;
  const [authorPosts, setAuthorPosts] = useState({
    status: "loading",
    posts: [],
  });
  useEffect(() => {
    async function makeRequest(){
    try {
      const res = await axios.get(`/posts/author/${aid}`);
      setAuthorPosts({ status: "done", posts: res.data.posts });
    } catch (error) {
      setAuthorPosts({ status: "error", error: error.message });
      console.error(error);
    }
  };
  makeRequest();
  }, [aid]);

  if (authorPosts.status === "loading") {
    return  <center><CircularProgress/></center>;
  }

  if (authorPosts.status === "error") {
    return <div>{authorPosts.message}</div>;
  }

  return (
    <div>
      <PostList posts={authorPosts.posts} />
    </div>
  );
};

export default PostGrid;
