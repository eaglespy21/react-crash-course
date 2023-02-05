import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost from "./components/NewPost.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App></App> },
  { path: "/create-post", element: <NewPost></NewPost> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
