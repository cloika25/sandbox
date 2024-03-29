import { useRoutes } from 'react-router-dom';
import React from 'react';
import DialogView from './DialogView';

export const DialogRouter = () => {
  const router = useRoutes([{
    path: '/',
    element: <DialogView />,
  }]);

  return router;
};
