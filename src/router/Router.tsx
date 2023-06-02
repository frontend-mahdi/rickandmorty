import React from "react";
import { useRoutes } from "react-router-dom";

// import Layout from "./../layouts/Layout";
import Layout from "@/layouts/Layout";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <div>main component</div>,
        },
      ],
    },
  ]);

  return routes;
};

export default Router;
