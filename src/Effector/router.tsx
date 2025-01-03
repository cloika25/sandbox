import React from "react";
import { useRoutes } from "react-router";
import PetStore from "./PetStore";
import "./models/init";

export const EffectorRouter = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <PetStore />,
    },
  ]);

  return router;
};
