import React from "react";
import image from "../../../assets/logo/home.jpg";

const HomeDelivery = () => {
  return (
    <div className="w-3/4 mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.pinimg.com/originals/e5/07/d7/e507d704d4b6fdcb17116762fcd99acd.gif"
            alt="Album"
          />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title">Get Your Desired Book Now !</h2>
          <p>Register Now and pay for the book you want</p>
          <p>Get the fastest delivery service</p>
          <div className="card-actions justify-center ">
            <button className="btn w-3/4 btn-primary text-white font-bold">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDelivery;
