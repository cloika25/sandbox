import { Off } from "./Off";
import { Named } from "./Named";
import { SimpleLogin } from "./SimpleLogin";
import { Routes } from "../routes";
import { RouteObject } from "react-router";
import { StartPage } from "./StartPage";

export const AutocompleteRoutes = {
  root: Routes.autocomplete,
  off: Routes.autocomplete + "/off",
  named: Routes.autocomplete + "/named",
  simpleLogin: Routes.autocomplete + "/simpleLogin",
};

export const AutocompleteChildrensRouter: RouteObject[] = [
  {
    path: AutocompleteRoutes.root,
    element: <StartPage />,
  },
  {
    path: AutocompleteRoutes.off,
    element: <Off />,
  },
  {
    path: AutocompleteRoutes.named,
    element: <Named />,
  },
  {
    path: AutocompleteRoutes.simpleLogin,
    element: <SimpleLogin />,
  },
];
