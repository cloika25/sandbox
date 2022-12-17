import { createBrowserRouter,  Navigate,  RouterProvider } from 'react-router-dom'
import './App.css'
import { MainPage } from './views/MainPage'
import { AutocompleteRouter } from './Autocomplete/router'
import { EffectorRouter } from './Effector/router'

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
    path: '/effector/*',
    element: <EffectorRouter />
  },
  {
    path: '*',
    element: <Navigate to="/" replace />
  }
])

const App: React.FC = () =>  {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
