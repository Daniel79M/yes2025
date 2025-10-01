import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import "./index.css";
import Home from './Pages/Home';
import Inscription from './Pages/Inscription';
import AdminDashboard from './Pages/AdminDashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  // {
  //   path: "/AdminDashboard",
  //   element: <AdminDashboard />,
  // },
  {
     path: "/Inscription",
    element: <Inscription />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      {/* <Home/> */}
       <RouterProvider router={router} />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

