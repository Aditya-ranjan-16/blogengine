import { useState, useEffect } from "react";
import axios from "axios";

import Comment from "./Comment";

import Box from "@mui/material/Box";

const CommentList = ({ postID }) => {
  const [commentData, setCommentData] = useState({
    status: "loading",
    comments: [
      {
        name: "loading username",
        email: "loading@loading.com",
        comment: "loading comment...",
      },
    ],
  });

  useEffect(async () => {
    try {
      const res = await axios.get(`/comments/post/${postID}`);
      setCommentData({ status: "done", comments: res.data.comments });
    } catch (error) {
      setCommentData({
        status: "error",
        comments: {
          name: "error",
          email: "error@error.com",
          comment: error.message,
        },
      });
      console.error(error);
    }
  }, [postID]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {commentData.comments.map((comment) => (
        <Comment {...comment} key={comment._id || ""} />
      ))}
    </Box>
  );
};

export default CommentList;
