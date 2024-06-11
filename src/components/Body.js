import React from 'react'
import Login from './Login'
import Explore from './Explore'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

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
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body