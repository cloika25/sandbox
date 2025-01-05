import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { AutocompleteRouter } from "./Autocomplete/router";
import { DialogRouter } from "./Dialog/router";
import { EffectorRouter } from "./Effector/router";
import { NotificationRouter } from "./Notification/router";
import { ReduxToolkitRouter } from "./ReduxToolkit/router";
import { ShareApiRouter } from "./ShareApi/router";
import { MainPage } from "./views/MainPage";
import "./App.css";
import { Routes } from "./routes";

const router = createBrowserRouter([
  {
    path: Routes.mainPage,
    element: <MainPage />,
  },
  {
    path: Routes.autocomplete + "/*",
    element: <AutocompleteRouter />,
  },
  {
    path: Routes.dialog + "/*",
    element: <DialogRouter />,
  },
  {
    path: Routes.effector + "/*",
    element: <EffectorRouter />,
  },
  {
    path: Routes.reduxToolkit + "/*",
    element: <ReduxToolkitRouter />,
  },
  {
    path: Routes.notification + "/*",
    element: <NotificationRouter />,
  },
  {
    path: Routes.shareApi + "/*",
    element: <ShareApiRouter />,
  },
  {
    path: "*",
    element: <Navigate to={Routes.mainPage} replace />,
  },
]);

const App: React.FC = () => (
  <div className="App">
    <RouterProvider router={router} />
  </div>
);

export default App;
