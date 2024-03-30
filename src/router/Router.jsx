import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Home/Main";
import { Home } from "../Components/Home/Home";
import About from "../Components/About/About";
import Login from "../Components/login/Login";
import Post from "../Components/Post/Post";

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
        path: "/post",
        element: <Post />,
      },
    ],
  },
  {
    path: "*",
    element: <p>This is error</p>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);