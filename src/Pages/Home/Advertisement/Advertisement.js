import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../../Loading/Loading";

const Advertisement = () => {
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["adsProducts"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://deal-points-server.vercel.app/adsProducts`,
          {
            //   headers: {
            //     authorization: `bearer ${localStorage.getItem("accessToken")}`,
            //   },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDeleteProduct = (product) => {
    fetch(`https://deal-points-server.vercel.app/adsProducts/${product._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(` Ordered successfully`);
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-3/4 mx-auto my-10">
      {products.length ? (
        <>
          <h1 className="text-xl font-bold text-center my-10">Advertisement</h1>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
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
                  <h2 className="card-title text-black">{product.name}</h2>
                  <marquee>{product.description}</marquee>
                  <p className="text-start">Price: {product.price} Taka</p>
                  <div className="card-actions justify-center">
                    <button
                      onClick={() => handleDeleteProduct(product)}
                      className="btn w-3/4 font-bold text-white mt-5 btn-primary"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Advertisement;
