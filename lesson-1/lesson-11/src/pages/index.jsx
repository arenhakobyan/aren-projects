import Home from "./Home";
import About from "./About";

import {
    createBrowserRouter
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: < Home />,
    },
    {
      path: "/about",
      element: < About />,
    },
    {
      path: "*",
      element: <h1>Tenc ej chka 404</h1>
    }
  ]);

  export default router;