import Grid from "@mui/material/Grid";
import PostListItem from "./PostListItem";

const PostList = ({ posts }) => {
  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={post.title}>
          <PostListItem {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;
