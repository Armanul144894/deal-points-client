import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="hero  bg-base-100">
      <div className="hero-content max-w-[1200px] w-full flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Contact now!</h1>
          <p className="py-6 text-xl">
            Fill free to contact with us.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered rounded"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder=" Your email address"
                className="input input-bordered rounded"
              />
              
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Your phone number"
                className="input input-bordered rounded"
              />
              
            </div>

            <textarea className="textarea textarea-bordered rounded" placeholder="Message"></textarea>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white flex gap-2 items-center justify-center">Send <FaLocationArrow/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
