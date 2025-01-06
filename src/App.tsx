import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { AutocompleteRouter } from "./Autocomplete/router";
import { DialogRouter } from "./Dialog/router";
import { EffectorRouter } from "./Effector/router";
import { NotificationRouter } from "./Notification/router";
import { ReduxToolkitRouter } from "./ReduxToolkit/router";
import { ShareApiRouter } from "./ShareApi/router";
import { MainPage } from "./views/MainPage";
import { Routes } from "./routes";
import { Layout } from "./Layout";

const router = createBrowserRouter([
  {
    path: Routes.mainPage,
    element: <MainPage />,
  },
  {
    path: Routes.autocomplete + "/*",
    element: (
      <Layout>
        <AutocompleteRouter />
      </Layout>
    ),
  },
  {
    path: Routes.dialog + "/*",
    element: (
      <Layout>
        <DialogRouter />
      </Layout>
    ),
  },
  {
    path: Routes.effector + "/*",
    element: (
      <Layout>
        <EffectorRouter />
      </Layout>
    ),
  },
  {
    path: Routes.reduxToolkit + "/*",
    element: (
      <Layout>
        <ReduxToolkitRouter />
      </Layout>
    ),
  },
  {
    path: Routes.notification + "/*",
    element: (
      <Layout>
        <NotificationRouter />
      </Layout>
    ),
  },
  {
    path: Routes.shareApi + "/*",
    element: (
      <Layout>
        <ShareApiRouter />
      </Layout>
    ),
  },
  {
    path: "*",
    element: <Navigate to={Routes.mainPage} replace />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
