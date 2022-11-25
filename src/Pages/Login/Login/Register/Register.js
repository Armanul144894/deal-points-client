import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [signUpError, setSignUpError] = useState("");
  const handleSignUp = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Sign Up Successfully");
        reset();
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };
  return (
    <div className="  flex justify-center items-center ">
      <div className=" my-20 shadow-2xl p-7 w-96  rounded-md">
        <h1 className="text-center text-xl font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name")}
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Select</span>
            </label>
            <select
              {...register("select")}
              className="select select-bordered w-full max-w-xs"
            >
              <option selected>Buyer</option>
              <option>Seller</option>
            </select>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
                pattern: {
                  value:
                    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                  message: "password must be strong",
                },
              })}
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <div>{<p className="text-red-600">{signUpError}</p>}</div>
          </div>

          <input
            className="btn btn-accent my-5 text-white font-bold w-full "
            type="submit"
            value="Sign Up"
          />
        </form>
        <p className="mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-secondary font-bold">
            Login
          </Link>
        </p>

        <div className="divider my-5">OR</div>

        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Register;
