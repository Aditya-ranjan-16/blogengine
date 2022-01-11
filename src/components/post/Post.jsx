import {
  Card,
  CardContent,
  Link,
  Button,
  Box,
  Divider,
  Typography,
  Chip,
  Stack
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link as RouterLink } from "react-router-dom";

import Viewer from "./Viewer";
import CommentList from "../commentlist/CommentList";

const Post = ({
  postID,
  title,
  subtitle,
  author,
  authorID,
  content,
  likes,
  onLike,
  tags,
}) => {
  return (
    <Card variant="outlined">
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            my: 4,
          }}
        >
          <Typography variant="h3">{title}</Typography>
          <Typography variant="body" sx={{ fontStyle: "italic" }}>
            {subtitle}
          </Typography>
          <Button
            size="large"
            color="inherit"
            endIcon={<FavoriteIcon />}
            onClick={onLike}
          >
            {likes}
          </Button>
        </Box>
        <Box sx={{ width: "100%", px: 4 }}>
          <Viewer content={content} />
        </Box>
        <Divider sx={{ width: "100%" }} />
        <Stack  direction="row" spacing={2}>
                {tags.length!=0 && tags.map((e)=>(
               <Chip sx={{color:"blue",borderColor:"blue"}} label={e} variant="outlined" onClick  />
                ))}
        </Stack>
        <Link
          to={`/author/${authorID}`}
          component={RouterLink}
          color="inherit"
          sx={{ textDecoration: "none", fontStyle: "italic" }}
        >
          {`By ${author}`}
        </Link>
        <Divider sx={{ width: "100%" }} />
        <Typography variant="h6" align="center">
          Comments
        </Typography>
        <CommentList postID={postID} />
      </CardContent>
    </Card>
  );
};

export default Post;
