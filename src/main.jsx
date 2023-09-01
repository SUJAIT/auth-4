import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login';
import Main from './component/Main';
import Order from './component/Order';
import Products from './component/Products';
import Register from './component/Register';
import AuthContextProvider from './context/AuthContextProvider';
import './index.css';
import PrivateRoute from './Private/PrivateRoute';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/product",
        element:<PrivateRoute><Products></Products></PrivateRoute>
      },
      {
        path:"/order",
        element:<PrivateRoute><Order></Order></PrivateRoute>
      }


    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthContextProvider>
     <RouterProvider router={router} />
   </AuthContextProvider>
  </React.StrictMode>

)
