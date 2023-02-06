import { useLoaderData } from "react-router-dom";
import classes from "./PostsList.module.css";
import Post from "./Post";

function PostsList() {
  const posts = useLoaderData();
  let modalContent;

  return (
    <>
      {modalContent}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No Posts!.</h2>
          <p>Please add some.</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
