import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "@mui/material/Link";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

import Viewer from "../viewer/Viewer";
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
        <ButtonGroup>
          {tags.map((tag) => (
            <Button key={tag}>{tag}</Button>
          ))}
        </ButtonGroup>
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
