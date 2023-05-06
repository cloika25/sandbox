import React from 'react';
import { useRoutes } from 'react-router-dom';
import Notification from './example';

export const NotificationRouter = () => {
  const router = useRoutes([{
    path: '/',
    element: <Notification />,
  }]);

  return router;
};
