import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
// import { DialogRouter } from "./Dialog/router";
// import { EffectorRouter } from "./Effector/router";
// import { NotificationRouter } from "./Notification/router";
// import { ReduxToolkitRouter } from "./ReduxToolkit/router";
// import { ShareApiRouter } from "./ShareApi/router";
import { MainPage } from "./views/MainPage";
import { Routes } from "./routes";
import { Layout } from "./Layout";
import { AutocompleteChildrensRouter } from "./Autocomplete/router";
import { DialogChilderRouter } from "./Dialog/router";
import { EffectorChildrensRouter } from "./Effector/router";
import { ReduxToolkitChildrenRouter } from "./ReduxToolkit/router";
import { ShareApiChildrensRouter } from "./ShareApi/router";

const router = createBrowserRouter([
  {
    path: Routes.mainPage,
    element: <MainPage />,
  },
  {
    path: Routes.mainPage,
    element: <Layout />,
    children: [
      {
        path: Routes.autocomplete,
        children: AutocompleteChildrensRouter,
      },
      {
        path: Routes.dialog,
        children: DialogChilderRouter,
      },
      {
        path: Routes.effector,
        children: EffectorChildrensRouter,
      },
      {
        path: Routes.reduxToolkit,
        children: ReduxToolkitChildrenRouter,
      },
      {
        path: Routes.shareApi,
        children: ShareApiChildrensRouter,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={Routes.mainPage} replace />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
