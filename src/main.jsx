import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componenst/Root/Root';
import Home from './componenst/Home/Home';
import AppliedJobs from './componenst/AppliedJobs/AppliedJobs';
import Blog from './componenst/Blog/Blog';
import Statistics from './componenst/Statistics/Statistics';
import Jobs from './componenst/Jobs/Jobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Jobs></Jobs>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
