import {
  createBrowserRouter,
  RouterProvider,
  Outlet,

} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import Books from './pages/Books/Books';

const Layout = () => (
  <div className="app">
    <Navbar />
    <Outlet />

  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/categories',
        element: <Categories />,
      },
      {
        path: '/books',
        element: <Books />,
      },

    ],

  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
