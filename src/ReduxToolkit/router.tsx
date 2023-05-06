import { useRoutes } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import ReduxToolkitExample from './ReduxToolkitExample';
import { store } from './store';

export const ReduxToolkitRouter = () => {
  const router = useRoutes([{
    path: '/',
    element: <Provider store={store}><ReduxToolkitExample /></Provider>,
  }]);

  return router;
};
