import { useState } from "react";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function hideModalHandler() {
    setModalIsVisible(false);
  }
  function showModalHandler() {
    setModalIsVisible(true);
  }
  return (
    // On is a convetion to state that the prop is receiving a function as a value
    // Typically the function that is passed is linked to an event listener further down in the code
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        ></PostsList>
      </main>
    </>
    // Must return one root element - cannot return multiple elements
  );
}

export default App;
