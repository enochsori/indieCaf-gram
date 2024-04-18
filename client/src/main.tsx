import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFount from './pages/NotFount.tsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Messenger from './pages/Messenger.tsx';
import NewCafe from './pages/NewCafe.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFount />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/messenger',
        element: <Messenger />,
      },
      {
        path: '/new-Café',
        element: <NewCafe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
