import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import SearchBooks from './pages/SearchBooks'
import SavedBooks from './pages/SavedBooks'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, //specifies the component to render when the path matches '/'
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [ // nested route configurations
      {
        index: true, //match the root path ('/') and render the SearchBooks component when the root path is accessed.
        element: <SearchBooks />
      }, {
        path: '/saved', //will match the path '/saved' and render the SavedBooks component when that path is accessed
        element: <SavedBooks />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
) // RouteProvider component is imported from react-router-dom
