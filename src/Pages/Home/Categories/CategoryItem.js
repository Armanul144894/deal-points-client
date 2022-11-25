import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Category from "../Category/Category";
const CategoryItem = ({ category }) => {
  const { title, _id, items } = category;
  return (
    <div className={`card p-6 md:card-side bg-primary shadow-xl text-white`}>
      <div className="card-body flex justify-between flex-row items-center">
        <h2 className="card-title">{title}</h2>
        <Link to={`/category/${_id}`}>
          <FaArrowAltCircleRight></FaArrowAltCircleRight>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
