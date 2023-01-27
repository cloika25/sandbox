import { useRoutes } from 'react-router-dom';
import React from 'react';
import ReduxToolkitExample from './ReduxToolkitExample';

export const ReduxToolkitRouter = () => {
  const router = useRoutes([{
    path: '/',
    element: <ReduxToolkitExample />,
  }]);

  return router;
};
