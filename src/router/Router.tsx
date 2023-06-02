import React from "react";
import { useRoutes } from "react-router-dom";

// import Layout from "./../layouts/Layout";
import Layout from "@/layouts/Layout";
import Main from "@/pages/Main";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
      ],
    },
  ]);

  return routes;
};

export default Router;
