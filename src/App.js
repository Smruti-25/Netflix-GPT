import { createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Explore from './components/Explore';
import { RouterProvider } from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/explore",
    element: <Explore />,
  }
]);

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
