import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx';
import About from './Component/About/About.jsx';

import Service from './Component/About/Service.jsx';
import Home4 from './Component/Home/Home4.jsx';
import Projects from './Component/Projects/Projects.jsx';
import Contact from './Component/Contact/Contact.jsx';




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
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
