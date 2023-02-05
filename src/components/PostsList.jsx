import { useState, useEffect } from "react";
import classes from "./PostsList.module.css";
import Post from "./Post";

function PostsList() {
  // The following is something we should NOT do - causes an infinite loop
  // fetch("http://localhost:8080/posts").then(response => response.json().then(data => {
  //   setPosts(data.posts);
  // }));
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      // Add error handling here is response code is not 200
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  let modalContent;

  return (
    <>
      {modalContent}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No Posts!.</h2>
          <p>Please add some.</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
