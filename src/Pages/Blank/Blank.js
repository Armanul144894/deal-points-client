import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/blank/notFound.png";
import useTitle from "../../hooks/useTitle/useTitle";

const Blank = () => {
  useTitle("Blank");
  return (
    <div className="card w-96 bg-base-300 my-20 shadow-xl mx-auto">
      <figure className="px-5 pt-5">
        <img src={notFound} alt="Shoes" className="rounded-xl w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h4 className="text-red-500 font-bold text-xl">Opps!!</h4>
        <h4 className="text-red-500 font-bold text-xl">404 Not Found</h4>
        <div className="card-actions">
          <p className="font-bold">
            Go back to:{" "}
            <Link className="text-xl text-blue-500" to="/">
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blank;
