import React from "react";
import "./BannerItems.css";
const BannerItems = ({ data }) => {
  const { image, next, prev, id } = data;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <figure className="carousel-img w-full">
        <img src={image} alt="" className=" w-full h-96 rounded" />
      </figure>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4 w-3/4 mx-auto mt-10">
        <h1 className="text-xl font-bold text-white">
          Books help to inspire students to do hard work with courage and hope.
          They enrich the experience of students and sharpen their intellect.
          There are many benefits of Reading books; students will get more
          knowledge, improve memory and build more vocabulary.
        </h1>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
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
