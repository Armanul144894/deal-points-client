import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import BookingModal from "../../../BookingModal/BookingModal";
import Loading from "../../../Loading/Loading";

const ProductItem = ({ item, id }) => {
  const { loading } = useContext(AuthContext);
  const {
    name,
    picture,
    location,
    resale_price,
    original_price,
    uses_years,
    time,
    seller_name,
  } = item;

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={picture} className="w-full h-80" alt="Shoes" />
      </figure>
      <div className="card-body text-xl">
        <h2 className="card-title ">
          {name}
          <div className="badge badge-secondary">OLD</div>
        </h2>
        <div className="text-start text-xs font-bold">
          <p>location: {location}</p>
          <p>Resale Price: {resale_price}</p>
          <p>Original Price: {original_price}</p>
          <p>Uses Years: {uses_years}</p>
          <p>Time : {time}</p>
          <p>Seller Name : {seller_name}</p>
        </div>
        <div className="card-actions justify-end">
          <label
            className="btn btn-primary text-white font-bold"
            htmlFor="booking-modal"
          >
            Booked Now
          </label>
        </div>
      </div>
      <div>
        {
          <BookingModal
            picture={picture}
            productId={id}
            item={item}
          ></BookingModal>
        }
      </div>
    </div>
  );
};

export default ProductItem;
