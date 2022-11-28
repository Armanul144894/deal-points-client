import React from "react";
import Advertisement from "./Advertisement/Advertisement";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import HomeDelivery from "./HomeDelivery/HomeDelivery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <Advertisement></Advertisement>
      <HomeDelivery></HomeDelivery>
    </div>
  );
};

export default Home;
