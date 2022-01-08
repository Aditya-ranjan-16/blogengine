import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PostList from "../components/postlist/PostList";

const Author = () => {
  const aid = useParams().aid;

  const [authorPosts, setAuthorPosts] = useState({
    status: "loading",
    posts: [],
  });

  useEffect(async () => {
    try {
      const res = await axios.get(`/posts/author/${aid}`);
      console.log(res.data);
      setAuthorPosts({ status: "done", posts: res.data.posts });
    } catch (error) {
      setAuthorPosts({ status: "error", error: error.message });
      console.error(error);
    }
  }, [aid]);

  if (authorPosts.status === "loading") {
    return <div>loading..</div>;
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

export default Author;
