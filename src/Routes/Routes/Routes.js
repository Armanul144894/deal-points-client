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
import AllUsers from "../../Pages/UserInfo/AllUsers/AllUsers";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellerRoutes from "../SellerRoutes/SellerRoutes";

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
            return fetch(
              `https://deal-points-server.vercel.app/products/${params.id}`
            );
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
          element: (
            <SellerRoutes>
              <AddProduct></AddProduct>
            </SellerRoutes>
          ),
        },
        {
          path: "/myProducts",
          element: (
            <SellerRoutes>
              <MyProducts></MyProducts>
            </SellerRoutes>
          ),
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
          path: "/allUsers",
          element: (
            <AdminRoutes>
              <AllUsers></AllUsers>
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
