import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [authorList, setAuthorListData] = useState({
    status: "loading",
    authors: [],
  });

  useEffect(async () => {
    try {
      const res = await axios.get("/authors/");
      console.log(res.data);
      setAuthorListData({ status: "done", authors: res.data.authors });
    } catch (error) {
      setPostListData({ status: "error", message: error.message });
      console.error(error);
    }
  }, []);

  if (authorList.status === "loading" || authorList.status === "error") {
    return <div></div>;
  }

  return (
    <div>
      <h1>List of all posts</h1>
      <ul>
        {authorList.authors.map((author) => (
          <li key={author.id}>
            <Link to={`/author/${author.id}`}>{author.name}</Link>- {author.id}
          </li>
        ))}
      </ul>

      <Link to="/post/new">Create new post</Link>
    </div>
  );
};

export default Home;
