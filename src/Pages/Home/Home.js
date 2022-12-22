import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle/useTitle";
import Loading from "../Loading/Loading";
import Advertisement from "./Advertisement/Advertisement";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import HomeDelivery from "./HomeDelivery/HomeDelivery";

const Home = () => {
  useTitle("Home");
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
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
