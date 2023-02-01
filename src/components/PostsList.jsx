import { useState } from "react";
import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
function PostsList({ isPosting, onStopPosting }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  let modalContent;

  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
          onCancel={onStopPosting}
        ></NewPost>
      </Modal>
    );
  } else {
    modalContent = false;
  }

  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Will" body="Some more comment" />
      </ul>
    </>
  );
}

export default PostsList;
