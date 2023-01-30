import Post from "./components/Post";

function App() {
  return (
    <main>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </main> // Must return one root element - cannot return multiple elements
  );
}

export default App;
