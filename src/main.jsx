import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, { loader as postsLoader } from "./routes/Posts.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import NewPost, { action as newPostAction } from "./routes/NewPost.jsx";
import PostDetails, {
  loader as postDetailsLoader,
} from "./routes/PostDetails.jsx";
import "./index.css";



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
        children: [
          {
            path: "/create-post",
            element: <NewPost></NewPost>,
            action: newPostAction,
          },
          {
            path: "/:id",
            element: <PostDetails></PostDetails>,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

