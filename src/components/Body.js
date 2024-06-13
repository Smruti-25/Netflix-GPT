import React from 'react'
import Login from './Login'
import Explore from './Explore'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './Error';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/explore",
      element: <Explore />,
    },
    {
      path: "/error",
      element: <Error />
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body