import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, { loader as postsLoader } from "./routes/Posts.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost from "./routes/NewPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Posts></Posts>,
        loader: postsLoader, //Element is rendered only after this function is executed
        //This can be avoided use react-router features
        children: [{ path: "/create-post", element: <NewPost></NewPost> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
