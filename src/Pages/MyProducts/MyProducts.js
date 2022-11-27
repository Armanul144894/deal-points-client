import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../Loading/Loading";

const MyProducts = () => {
  const [deletingProduct, setDeletingProduct] = useState(null);

  const closeModal = () => {
    setDeletingProduct(null);
  };

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/addedProducts", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDeleteProduct = (product) => {
    fetch(`http://localhost:5000/addedProducts/${product._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          //   toast.success(`Doctor ${doctor.name} deleted successfully`);
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl font-bold my-5">
        My Product: {products?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Book Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={product.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{product.product}</td>
                <td>{product.price} Taka</td>
                {/* <td>{product.specialty}</td> */}
                <td>Available</td>
                <td>
                  <label
                    onClick={() => setDeletingProduct(product)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error text-white"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingProduct.product} book. It cannot be undone.`}
          successAction={handleDeleteProduct}
          successButtonName="Delete"
          modalData={deletingProduct}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}

      <Toaster></Toaster>
    </div>
  );
};

export default MyProducts;
