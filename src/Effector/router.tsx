import React from 'react';
import { useRoutes } from 'react-router-dom';
import PetStore from './PetStore';
import './models/init';

export const EffectorRouter = () => {
  const router = useRoutes([{
    path: '/',
    element: <PetStore />,
  }]);

  return router;
};
