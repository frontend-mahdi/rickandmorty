import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

// import Layout from "./../layouts/Layout";
import Layout from "@/layouts/Layout";
import Main from "@/pages/Main";
import Info from "@/pages/Info";
import NotFound from "@/pages/NotFound";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/characters" />,
        },

        {
          path: "/characters",
          element: <Main />,
        },
        {
          path: "/characters/:id",
          element: <Info />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return routes;
};

export default Router;
