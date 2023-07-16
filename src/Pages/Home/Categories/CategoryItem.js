import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const CategoryItem = ({ category }) => {
  const { title, _id } = category;
  return (
    <Link to={`/category/${_id}`}>
      <div className={`card h-full p-6 md:card-side bg-primary shadow-xl text-white`}>
        <div className="card-body flex justify-between flex-row items-center">
          <h2 className="card-title">{title}</h2>

          <FaArrowAltCircleRight></FaArrowAltCircleRight>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
