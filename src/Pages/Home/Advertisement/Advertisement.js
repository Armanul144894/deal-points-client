import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../../Loading/Loading";
import Marquee from "react-fast-marquee";

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
    <div>
      {products.length ? (
        <>
          <h1 className="text-2xl font-bold text-center my-10">Advertisement</h1>

          <Marquee>
            <div className="grid grid-flow-col gap-10 mb-20">
              {products.map((product) => (
                <div key={product._id} className="card glass w-full max-w-[500px]">
                  <figure>
                    <img
                      src={product.image}
                      className="w-full max-w-[280px] p-10 h-[350px]"
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
          </Marquee>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Advertisement;
