import { Provider } from "react-redux";
import ReduxToolkitExample from "./ReduxToolkitExample";
import { store } from "./store";
import { Routes } from "../routes";

export const ReduxToolkitChildrenRouter = [
  {
    path: Routes.reduxToolkit,
    element: (
      <Provider store={store}>
        <ReduxToolkitExample />
      </Provider>
    ),
  },
];
