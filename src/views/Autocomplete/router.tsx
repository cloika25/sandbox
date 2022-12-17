import { useRoutes } from 'react-router-dom'
import { StartPage } from './StartPage'
import { Off } from './Off';
import { Named } from './Named';


export const AutocompleteRouter = () => {
  const router = useRoutes([{
    path: '/',
    element: <StartPage/>
  }, {
    path: '/off',
    element: <Off/>
  }, {
    path: '/named',
    element: <Named/>
  }])
  return router
}