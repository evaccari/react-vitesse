import { createBrowserRouter } from 'react-router-dom'
import App from './app'
import NotFoundLayout from './layouts/404'
import DefaultLayout from './layouts/Default'
import HomeLayout from './layouts/Home'
import About from './pages/About'
import HiPage from './pages/hi'
import HomePage from './pages/Home'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
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
          {
            path: '/about',
            element: <About />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundLayout />,
      },
    ],
  },
])
