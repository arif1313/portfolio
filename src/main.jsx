import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css' // Ensure this file has the CSS for flex layouts, overflow control, etc.
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx';
import About from './Component/About/About.jsx';
import Home2 from './Component/Home/Home2.jsx';
import Service from './Component/About/Service.jsx';
import Home4 from './Component/Home/Home4.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home4 />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: 'services',
        element: <Service />
      }
    ]
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
