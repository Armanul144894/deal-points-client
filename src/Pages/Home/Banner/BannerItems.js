import React from "react";
import "./BannerItems.css";
const BannerItems = ({ data }) => {
  const { image, next, prev, id } = data;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <img src={image} alt="" className="w-full h-1/2 rounded" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItems;
