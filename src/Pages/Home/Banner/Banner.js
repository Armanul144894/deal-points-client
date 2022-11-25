import React from "react";
import img1 from "../../../assets/banner/img1.png";
import img2 from "../../../assets/banner/img2.png";
import img3 from "../../../assets/banner/img1.png";
import img4 from "../../../assets/banner/img1.png";
import img5 from "../../../assets/banner/img1.png";
import img6 from "../../../assets/banner/img1.png";
import BannerItems from "./BannerItems";

const Banner = () => {
  const bannerData = [
    {
      image: img1,
      prev: 6,
      id: 1,
      next: 2,
    },
    {
      image: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image: img4,
      prev: 3,
      id: 4,
      next: 5,
    },
    {
      image: img5,
      prev: 4,
      id: 5,
      next: 6,
    },
    {
      image: img6,
      prev: 5,
      id: 6,
      next: 1,
    },
  ];
  return (
    <div className="carousel w-3/4 mx-auto my-10 h-1/2 ">
      {bannerData.map((data) => (
        <BannerItems key={data.id} data={data}></BannerItems>
      ))}
    </div>
  );
};

export default Banner;
