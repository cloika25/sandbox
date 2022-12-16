import { useRoutes } from 'react-router-dom'
import { StartPage } from './StartPage'
import { Off } from './Off';


export const AutocompleteRouter = () => {
  const router = useRoutes([{
    path: '/',
    element: <StartPage/>
  }, {
    path: '/off',
    element: <Off/>
  }])
  return router
}