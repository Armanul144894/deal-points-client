import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();
  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const product = {
            product: data.name,
            price: data.price,
            type: data.type,
            contact: data.phone,
            location: data.location,
            category: data.category,
            description: data.description,
            purchase_year: data.year,
            image: imgData.data.url,
          };

          // save doctor information to the database
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/myProducts");
            });
        }
      });
  };
  return (
    <div className="shadow-2xl shadow-blue-500 p-7 w-96 sm:w-96 md:w-[550px] lg:w-[750px] rounded-md mx-auto">
      <h1 className="text-2xl font-bold my-5">Add Product</h1>

      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Book Name</span>
            </label>
            <input
              type="text"
              required
              {...register("name", require)}
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              {...register("price", require)}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <select
              required
              {...register("type")}
              className="select select-bordered w-full max-w-xs"
            >
              <option selected>excellent</option>
              <option>good</option>
              <option>fair</option>
            </select>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Contact No</span>
            </label>
            <input
              type="number"
              {...register("phone", require)}
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("location", require)}
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Book Category</span>
            </label>
            <input
              type="text"
              {...register("category", require)}
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              {...register("description", require)}
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Purchase Year</span>
            </label>
            <input
              type="number"
              {...register("year", require)}
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              required
              {...register("image")}
              className="input input-bordered w-full "
            />
            {errors.image && (
              <p className="text-red-600">{errors.img?.message}</p>
            )}
          </div>
        </div>
        <input
          className="btn  btn-accent my-5 text-white font-bold w-full "
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
