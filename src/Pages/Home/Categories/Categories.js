import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-3/4 mx-auto">
      {categories?.map((category) => (
        <CategoryItem key={category._id} category={category}></CategoryItem>
      ))}
    </div>
  );
};

export default Categories;
