import React from "react";
import { useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";
import Products from "./Products/Products";

const Category = () => {
  const products = useLoaderData();
  return (
    <div>
      <div className="mx-auto w-3/4 my-10">
        {products.map((product, i) => (
          <Products key={i} product={product}></Products>
        ))}
      </div>

      <div className="my-10">
        <Categories></Categories>
      </div>
    </div>
  );
};

export default Category;
