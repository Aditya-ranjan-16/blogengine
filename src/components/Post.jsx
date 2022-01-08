import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Viewer from "./viewer/Viewer";

const Post = ({
  title,
  author,
  content,
  isLiked,
  onLikeToggle,
  headerImageURL,
}) => {
  return (
    <Card variant="outlined">
      <CardMedia
        src={headerImageURL}
        component="img"
        sx={{ maxHeight: "50vh" }}
      />
      <CardHeader
        avatar={<Avatar>{author[0]}</Avatar>}
        title={title}
        titleTypographyProps={{ variant: "h5" }}
        subheader={`By ${author}`}
        action={
          <IconButton
            color={isLiked ? "primary" : "default"}
            onClick={onLikeToggle}
            size="large"
          >
            <FavoriteIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Viewer content={content} />
      </CardContent>
    </Card>
  );
};

export default Post;
