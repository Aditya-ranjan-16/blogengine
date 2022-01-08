import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { ButtonGroup, Divider } from "@mui/material";

const PostListItem = ({ _id, title, likes, subtitle: desc }) => {
  return (
    <Card variant="outlined">
      <CardHeader
        title={title}
        titleTypographyProps={{ variant: "h5", align: "center" }}
      />
      <Divider />
      <CardContent sx={{ textAlign: "center" }}>{desc}</CardContent>
      <Divider />
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <ButtonGroup variant="contained">
          <Button>
            <Link
              to={`/post/${_id}`}
              component={RouterLink}
              color="inherit"
              sx={{ textDecoration: "none" }}
            >
              Read More
            </Link>
          </Button>
          <Button endIcon={<FavoriteIcon />}>{likes}</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default PostListItem;
