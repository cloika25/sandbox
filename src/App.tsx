import './App.css';
import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { MainPage } from './views/MainPage';
import { AutocompleteRouter } from './Autocomplete/router';
import { EffectorRouter } from './Effector/router';
import { DialogRouter } from './Dialog/router';
import { ReduxToolkitRouter } from './ReduxToolkit/router';
import { NotificationRouter } from './Notification/router';
import { ShareApiRouter } from './ShareApi/router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/autocomplete/*',
    element: <AutocompleteRouter />,
  },
  {
    path: '/dialog/*',
    element: <DialogRouter />,
  },
  {
    path: '/effector/*',
    element: <EffectorRouter />,
  },
  {
    path: '/reduxToolkit/*',
    element: <ReduxToolkitRouter />,
  },
  {
    path: '/notification/*',
    element: <NotificationRouter />,
  },
  {
    path: '/shareApi/*',
    element: <ShareApiRouter />,
  },
  {
    path: '*',
    element: <Navigate
      to="/"
      replace
    />,
  },
]);

const App: React.FC = () => (
  <div className="App">
    <RouterProvider router={router} />
  </div>
);

export default App;
