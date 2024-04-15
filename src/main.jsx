import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import Post from './Post.jsx';
import PostDetails from './PostDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
    children: [
      {
        path: "/post",
        loader: () => fetch("data.json")   ,
        element: <Post></Post> ,
      },
      {
        path: "/post/:postId",
        loader: ({params}) => fetch(`data.json/${params.postId}`) , 
        element: <PostDetails></PostDetails> ,
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
