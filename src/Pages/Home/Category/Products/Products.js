import React from "react";
import ProductItem from "./ProductItem";

const Products = ({ product }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
      {product.items.map((item) => (
        <ProductItem key={item.id} item={item}></ProductItem>
      ))}
    </div>
  );
};

export default Products;
