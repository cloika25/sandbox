import { Routes } from "../routes";
import PetStore from "./PetStore";
import "./models/init";

export const EffectorChildrensRouter = [
  {
    path: Routes.effector,
    element: <PetStore />,
  },
];
