import { useRoutes } from 'react-router-dom';
import React from 'react';
import { StartPage } from './StartPage';
import { Off } from './Off';
import { Named } from './Named';
import { SimpleLogin } from './SimpleLogin';

export const AutocompleteRouter = () => {
  const router = useRoutes([{
    path: '/',
    element: <StartPage />,
  }, {
    path: '/off',
    element: <Off />,
  }, {
    path: '/named',
    element: <Named />,
  }, {
    path: '/simpleLogin',
    element: <SimpleLogin />,
  }]);

  return router;
};
