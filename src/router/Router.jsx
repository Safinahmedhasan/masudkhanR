import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Home/Main";
import { Home } from "../Components/Home/Home";
import About from "../Components/About/About";
import Login from "../Components/login/Login";
import Post from "../Components/Post/Post";
import Card from "../Components/Card/Card";
import Friends from "../Components/Friends/Friends";
import FriendDetails from "../Components/Friends/FriendDetails";
import Blog from "../Components/Blog/Blog";
import SingleBlog from "../Components/Blog/SingleBlog";
import Dairy from "../Components/Dairy/Dairy";
import SingleDairy from "../Components/Dairy/SingleDairy";
import NotFound from "../Components/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/friends",
        element: <Friends />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/friendDetails/:friendId",
        element: <FriendDetails />,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
      },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts/"),
      },
      {
        path: "/singleBlog/:singleBlogId",
        element: <SingleBlog />,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.singleBlogId}`
          ),
      },
      {
        path: "/dairy",
        element: <Dairy />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "/singleDairy/:id",
        element: <SingleDairy />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
