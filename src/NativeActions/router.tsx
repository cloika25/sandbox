import { Routes } from "../routes";
import { PetStore } from "./pages/PetStore";

export const NativeActionsChildrensRouter = [
  {
    path: Routes.nativeActions,
    element: <PetStore />,
  },
];
