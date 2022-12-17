import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import './App.css'
import { MainPage } from './views/MainPage'
import { AutocompleteRouter } from './views/Autocomplete/router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/autocomplete/*',
    element: <AutocompleteRouter />,
  },
  {}
])

const App: React.FC = () =>  {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
