import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const PostListItem = ({
  title,
  author,
  desc,
  isLiked,
  onLikeToggle,
  onReadMore,
}) => {
  return (
    <Card variant="outlined">
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
      <CardContent>{desc}</CardContent>
      <CardActions>
        <Button onClick={onReadMore}>Read more</Button>
      </CardActions>
    </Card>
  );
};

export default PostListItem;
