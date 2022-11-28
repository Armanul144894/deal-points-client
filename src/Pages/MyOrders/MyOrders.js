import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle/useTitle";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  useTitle("MyOrders");
  const url = `https://deal-points-server.vercel.app/bookings?email=${user?.email}`;
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      {bookings?.length ? (
        <>
          <h3 className="text-3xl mb-5 font-bold">My Orders</h3>
          <div className="w-3/4 mx-auto ">
            {bookings.map((myOrder, indx) => (
              <div>
                <div className="flex flex-col lg:flex-row justify-evenly gap-5 mb-5 mx-5 shadow-md shadow-blue-600 p-3 rounded-md">
                  <div>
                    <img
                      src={myOrder.picture}
                      className="lg:w-40 md:full sm:w-full h-40"
                      alt=""
                    />
                  </div>
                  <div className="text-start">
                    <p className="text-xl font-semibold underline">
                      Order Details: {indx + 1}
                    </p>
                    <div>
                      <p className="font-semibold text-gray-500">
                        Order
                        <span className="ml-1">{myOrder._id}</span>
                      </p>
                      <p>
                        Book Name:
                        <span className="font-semibold ml-1">
                          {myOrder.product}
                        </span>
                      </p>
                      <p>
                        Price:
                        <span className="font-semibold ml-1">
                          {myOrder.price ? myOrder.price : "0"}
                        </span>{" "}
                        tk
                      </p>
                      <>
                        {myOrder.price && !myOrder.paid && (
                          <p className="text-rose-500 font-semibold">Unpaid</p>
                        )}
                        {myOrder.price && myOrder.paid && (
                          <p className="text-green-500">Paid</p>
                        )}
                      </>
                    </div>
                  </div>

                  <div className="w-[350px] text-start">
                    <p className="text-xl mb-2 font-semibold underline">
                      Your Information
                    </p>
                    <div>
                      <p className="flex items-center gap-2">
                        <FaMailBulk></FaMailBulk>
                        <span className="font-semibold ml-1">
                          {user?.email}
                        </span>
                      </p>
                      <p className="flex items-center gap-2">
                        <FaPhone></FaPhone>
                        <span className="font-semibold ml-1">
                          {myOrder.phone}
                        </span>
                      </p>
                      <p className="flex items-center gap-2">
                        <FaLocationArrow />
                        <span className="font-semibold ml-1 break-words">
                          {myOrder.location}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className=" flex gap-5 justify-center items-center">
                    <div>
                      {myOrder.price && !myOrder.paid && (
                        <Link>
                          <button className="px-2 py-1 font-semibold rounded outline outline-1 outline-green-600 hover:bg-green-600 hover:text-white hover:cursor-pointer">
                            Pay Now
                          </button>
                        </Link>
                      )}
                      {myOrder.price && myOrder.paid && (
                        <button
                          className="px-2 py-1 font-semibold rounded outline outline-1 bg-gray-400  hover:cursor-not-allowed"
                          disabled
                        >
                          Paid
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center font-bold text-2xl text-blue-500">
          <h1>No Order Placed!!</h1>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
