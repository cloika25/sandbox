import './App.css';
import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { MainPage } from './views/MainPage';
import { AutocompleteRouter } from './Autocomplete/router';
import { EffectorRouter } from './Effector/router';
import { DialogRouter } from './Dialog/router';
import { ReduxToolkitRouter } from './ReduxToolkit/router';

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
