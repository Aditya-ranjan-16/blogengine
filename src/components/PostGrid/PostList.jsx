import { Grid } from "@mui/material";
import PostListItem from "./PostListItem";
const PostList = ({ posts,to }) => {
  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} lg={6} key={post.title}>
          <PostListItem {...post}{...{to:to+post.id}} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;
