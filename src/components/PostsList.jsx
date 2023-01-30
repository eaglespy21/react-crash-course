import { useState } from "react";
import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  return (
    <>
      <NewPost></NewPost>
      <ul className={classes.posts}>
        <Post author="Max" body={enteredBody} />
        <Post author="Will" body="Some more comment" />
      </ul>
    </>
  );
}

export default PostsList;
