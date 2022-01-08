import Container from "@mui/material/Container";
import PostList from "./components/PostList";
import Post from "./components/Post";

const demoContent = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "Heading 1",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 2,
      },
      content: [
        {
          type: "text",
          text: "Heading 2",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 3,
      },
      content: [
        {
          type: "text",
          text: "Heading 3",
        },
      ],
    },
    {
      type: "horizontalRule",
    },
    {
      type: "taskList",
      content: [
        {
          type: "taskItem",
          attrs: {
            checked: false,
          },
          content: [
            {
              type: "paragraph",
              attrs: {
                textAlign: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Task 1",
                },
              ],
            },
          ],
        },
        {
          type: "taskItem",
          attrs: {
            checked: false,
          },
          content: [
            {
              type: "paragraph",
              attrs: {
                textAlign: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Task 2",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              attrs: {
                textAlign: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Bullet 1",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "orderedList",
      attrs: {
        start: 1,
      },
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              attrs: {
                textAlign: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Numbered list 1",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "center",
      },
      content: [
        {
          type: "image",
          attrs: {
            textAlign: "left",
            src: "https://picsum.photos/300",
            alt: null,
            title: null,
          },
        },
      ],
    },
  ],
};

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui excepturi facilis tenetur voluptatum voluptates iure atque nostrum.";

const posts = [
  {
    title: "Title",
    author: "Rohit Kharsan",
    isLiked: true,
    desc: lorem,
    onReadMore: () => {
      alert("Read this post");
    },
  },
  {
    title: "Title",
    author: "Rohit Kharsan",
    isLiked: true,
    desc: lorem,
    onReadMore: () => {
      alert("Read this post");
    },
  },
  {
    title: "Title",
    author: "Rohit Kharsan",
    isLiked: true,
    desc: lorem,
    onReadMore: () => {
      alert("Read this post");
    },
  },
  {
    title: "Title",
    author: "Rohit Kharsan",
    isLiked: true,
    desc: lorem,
    onReadMore: () => {
      alert("Read this post");
    },
  },
  {
    title: "Title",
    author: "Rohit Kharsan",
    isLiked: true,
    desc: lorem,
    onReadMore: () => {
      alert("Read this post");
    },
  },
  {
    title: "Title",
    author: "Rohit Kharsan",
    isLiked: true,
    desc: lorem,
    onReadMore: () => {
      alert("Read this post");
    },
  },
  {
    title: "Title",
    author: "Rohit Kharsan",
    isLiked: true,
    desc: lorem,
    onReadMore: () => {
      alert("Read this post");
    },
  },
  {
    title: "Title",
    author: "Rohit Kharsan",
    isLiked: true,
    desc: lorem,
    onReadMore: () => {
      alert("Read this post");
    },
  },
  {
    title: "Title",
    author: "Rohit Kharsan",
    isLiked: true,
    desc: lorem,
    onReadMore: () => {
      alert("Read this post");
    },
  },
  {
    title: "Title",
    author: "Rohit Kharsan",
    isLiked: true,
    desc: lorem,
    onReadMore: () => {
      alert("Read this post");
    },
  },
  {
    title: "Title",
    author: "Rohit Kharsan",
    isLiked: true,
    desc: lorem,
    onReadMore: () => {
      alert("Read this post");
    },
  },
  {
    title: "Title",
    author: "Rohit Kharsan",
    isLiked: true,
    desc: lorem,
    onReadMore: () => {
      alert("Read this post");
    },
  },
  {
    title: "Title",
    author: "Rohit Kharsan",
    isLiked: true,
    desc: lorem,
    onReadMore: () => {
      alert("Read this post");
    },
  },
  {
    title: "Title",
    author: "Rohit Kharsan",
    isLiked: true,
    desc: lorem,
    onReadMore: () => {
      alert("Read this post");
    },
  },
];

const App = () => {
  return (
    <Container sx={{ p: 2 }}>
      <h1>Viewer</h1>
      <Post
        {...posts[0]}
        headerImageURL="https://picsum.photos/id/13/1920/1080/"
        content={demoContent}
        onLikeToggle={() => {
          posts[0].isLiked = !posts[0].isLiked;
        }}
      />

      <br />
      <hr />
      <br />

      <h1>PostList</h1>
      <PostList posts={posts} />
    </Container>
  );
};

export default App;
