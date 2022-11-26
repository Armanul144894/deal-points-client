import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        // headers: {
        //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
        // },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteOrder = (myOrder) => {
    fetch(`http://localhost:5000/bookings/${myOrder._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
        }
      });
  };
  return (
    <div>
      <h3 className="text-3xl mb-5">My Orders</h3>
      <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="card card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img src={booking.picture} alt="Movie" />
            </figure>
            <div className="card-body">
              <p className="card-title">Order {booking._id}</p>
              <h2 className="card-title">{booking.product}</h2>
              <p>Price: {booking.price}</p>
              <div className="flex flex-row items-center justify-center justify-items-start">
                <FaLocationArrow></FaLocationArrow>
                <p>{booking.location}</p>
              </div>

              <div className="card-actions justify-end">
                <button
                  onClick={() => handleDeleteOrder(booking)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
