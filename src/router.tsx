import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from './layouts/Default'
import HomeLayout from './layouts/Home'
import NotFoundLayout from './layouts/404'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    element: <DefaultLayout />,
  },
  {
    path: "*",
    element: <NotFoundLayout />,
  }
])
