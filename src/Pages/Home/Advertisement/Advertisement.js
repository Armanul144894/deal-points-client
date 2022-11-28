import { useQuery } from "@tanstack/react-query";
import React from "react";

const Advertisement = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/adsProducts`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  return (
    <div className="w-3/4 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {products.map((product) => (
        <div key={product._id} className="card glass">
          <figure>
            <img
              src={product.image}
              className="w-full p-10 h-[350px]"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <marquee>{product.description}</marquee>
            <p className="text-start">Price: {product.price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Advertisement;
