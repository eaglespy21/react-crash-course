import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

function Posts() {
  return (
    // On is a convetion to state that the prop is receiving a function as a value
    // Typically the function that is passed is linked to an event listener further down in the code
    <>
      <Outlet></Outlet>
      <main>
        <PostsList></PostsList>
      </main>
    </>
    // Must return one root element - cannot return multiple elements
  );
}

export default Posts;

export async function loader() {
  //Loader functions cannot manipulate state
  const response = await fetch("http://localhost:8080/posts");
  // Add error handling here is response code is not 200
  const resData = await response.json();
  return resData.posts;
}
