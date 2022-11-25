import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const BookingModal = ({ item }) => {
  const { user } = useContext(AuthContext);

  const { name, resale_price } = item;

  const handleBooking = (data) => {
    toast.success(`${name} is Booked Successfully`);
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
              className="btn btn-accent text-white font-bold input-bordered input-md w-full"
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