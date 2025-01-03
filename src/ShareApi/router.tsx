import { useRoutes } from "react-router";
import React from "react";
import { ShareApiExample } from ".";

export const ShareApiRouter = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <ShareApiExample />,
    },
  ]);

  return router;
};
