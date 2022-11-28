import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useSeller from "../../../hooks/useSeller/useSeller";
import useTitle from "../../../hooks/useTitle/useTitle";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";

const AllSellers = () => {
  const { user } = useContext(AuthContext);
  const [deletingUser, setDeletingUser] = useState(null);
  const [isSeller] = useSeller(user?.email);
  useTitle("Sellers");
  console.log(isSeller);
  const closeModal = () => {
    setDeletingUser(null);
  };
  const url = `https://deal-points-server.vercel.app/users`;
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteUser = (user) => {
    fetch(`https://deal-points-server.vercel.app/users/${user._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(` deleted successfully`);
        }
      });
  };

  return (
    <div className="w-[95%] mx-auto">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>

              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>

                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <label
                    onClick={() => setDeletingUser(user)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingUser && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingUser.name}. It cannot be undone.`}
          successAction={handleDeleteUser}
          successButtonName="Delete"
          modalData={deletingUser}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}

      <Toaster></Toaster>
    </div>
  );
};

export default AllSellers;
