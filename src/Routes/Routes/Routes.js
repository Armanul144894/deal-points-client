import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Blank from "../../Pages/Blank/Blank";
import Blogs from "../../Pages/Blogs/Blogs";
import Category from "../../Pages/Home/Category/Category";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Login/Register/Register";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import AllBuyers from "../../Pages/UserInfo/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/UserInfo/AllSellers/AllSellers";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signUp",
          element: <Register></Register>,
        },
        {
          path: "/category/:id",
          element: (
            <PrivateRoutes>
              <Category></Category>
            </PrivateRoutes>
          ),
          loader: ({ params }) => {
            return fetch(`http://localhost:5000/products/${params.id}`);
          },
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "/myOrders",
          element: <MyOrders></MyOrders>,
        },
        {
          path: "/addProduct",
          element: <AddProduct></AddProduct>,
        },
        {
          path: "/myProducts",
          element: <MyProducts></MyProducts>,
        },
        {
          path: "/allSellers",
          element: (
            <AdminRoutes>
              <AllSellers></AllSellers>
            </AdminRoutes>
          ),
        },
        {
          path: "/allBuyers",
          element: <AllBuyers></AllBuyers>,
        },
      ],
    },
    {
      path: "/*",
      element: <Blank></Blank>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Routes;
