import React from 'react'
import Login from './Login'
import Explore from './Explore'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './Error';
import Landing from './Landing';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/landing",
      element: <Landing />,
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