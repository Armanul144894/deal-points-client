import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const BookingModal = ({ item, productId, picture }) => {
  const { user } = useContext(AuthContext);
  const { name, resale_price } = item;
  const navigate = useNavigate();

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const product = name;
    const contact = form.phone.value;
    const location = form.location.value;
    const booking = {
      buyer: user?.displayName,
      email: user?.email,
      product,
      price: resale_price,
      phone: contact,
      location,
      picture,
    };
    console.log(booking);

    fetch("https://deal-points-server.vercel.app/bookings", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(booking),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data.acknowledged) {
          toast.success("Booking Confirm");
          navigate("/myOrders");
          form.reset();
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal w-full">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name} Book</h3>
          <form onSubmit={handleBooking} className="grid gap-5 w-full mt-8">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              disabled
              required
              placeholder="Full Name"
              className="input input-bordered input-sm w-full py-5"
            />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              required
              placeholder="Your Email"
              className="input input-bordered input-sm w-full py-5"
            />
            <label className="label">
              <span className="label-text">Book Name</span>
            </label>
            <input
              type="text"
              name="productName"
              defaultValue={name}
              disabled
              required
              placeholder="Your Email"
              className="input input-bordered input-sm w-full py-5"
            />
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={`${resale_price} Taka`}
              disabled
              required
              placeholder="Phone Number"
              className="input input-bordered input-sm w-full py-5"
            />
            <label className="label">
              <span className="label-text">Contact</span>
            </label>
            <input
              type="number"
              name="phone"
              required
              placeholder="Contact Number"
              className="input input-bordered input-sm w-full py-5"
            />
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              required
              placeholder="Meeting Location"
              className="input input-bordered input-sm w-full py-5"
            />

            <input
              className="btn btn-accent bg-primary text-black font-bold input-bordered input-md w-full"
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
