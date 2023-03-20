import React from "react";
import { createBrowserRouter } from "react-router-dom";
// const Login = React.lazy(()=>import("../views/login/index.jsx"))
import Login from "../views/login/index.jsx";
import Home from "../views/home/index.jsx";
import Person from "../views/person/index.jsx";
import Root from "../views/root/index.jsx";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
    children:[
      {
        path:"person",
        element:<Person />
      },
      {
        path:"root",
        element:<Root />
      },
    ]
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

export default router;
