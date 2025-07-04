import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
/* import BasicRactQuery from '../pages/BasicRactQuery.jsx'
import UseInfinityQuery from '../pages/UseInfinityQueryPage.jsx'
import UseMutation from '../pages/UseMutationPage.jsx' */

const routers = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
     /*  {
        path: '/useInfinityQuery',
        element: <UseInfinityQuery />
      },
      {
        path: '/BasicRactQuery',
        element: <BasicRactQuery />
      },
      {
        path: '/useInfinityQuery',
        element: <UseInfinityQuery />
      },
      {
        path: '/useMutation',
        element: <UseMutation />
      } */
    ]
  },
]
const router = createBrowserRouter(routers)
const Routes = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default Routes
