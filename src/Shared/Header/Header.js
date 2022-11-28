import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/book.png";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin/useAdmin";
import useBuyer from "../../hooks/useBuyer/useBuyer";
import useSeller from "../../hooks/useSeller/useSeller";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign-out successful.");
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const menuItems = (
    <React.Fragment>
      <li>
        <Link className="btn btn-ghost" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="btn btn-ghost" to="/blogs">
          Blogs
        </Link>
      </li>
      <li>
        <Link className="btn btn-ghost" to="/blank">
          Blank
        </Link>
      </li>
    </React.Fragment>
  );
  return (
    <div className="navbar bg-base-100 h-10 py-2 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-32 h-32" src={logo} alt="" />
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Deal Points
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost ">
          <div className="mt-4">
            <Link className="flex flex-col">
              Dashboard
              <svg
                className="fill-current"
                xmlns="httLink://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          {user?.email ? (
            <>
              {isBuyer && (
                <li>
                  <Link to="/myOrders">My Orders</Link>
                </li>
              )}

              {isSeller && (
                <>
                  <li>
                    <Link to="/myProducts">My Products</Link>
                  </li>
                  <li>
                    <Link to="/addProduct">Add Product</Link>
                  </li>
                </>
              )}
              {isAdmin && (
                <>
                  <li>
                    <Link to="/allUsers">All Users</Link>
                  </li>
                  <li>
                    <Link to="/allSellers">All Sellers</Link>
                  </li>
                  <li>
                    <Link to="/allBuyers">All Buyers</Link>
                  </li>
                </>
              )}

              <li>
                <Link onClick={handleLogOut}>Logout</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>

      <Toaster></Toaster>
    </div>
  );
};

export default Header;
