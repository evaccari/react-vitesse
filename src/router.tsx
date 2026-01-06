import { createBrowserRouter } from 'react-router-dom'
import NotFoundLayout from './layouts/404'
import DefaultLayout from './layouts/Default'
import HomeLayout from './layouts/Home'
import HiPage from './pages/hi'
import HomePage from './pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/hi/:name',
        element: <HiPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundLayout />,
  },
])
