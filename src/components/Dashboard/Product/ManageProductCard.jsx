/* eslint-disable react/prop-types */
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const ManageProductCard = ({ product, onDelete }) => {
     const token = localStorage.getItem("token");

    const { _id, name, price, rating, image_url } = product;

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/product/${_id}`, product, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Product Deleted", {
        position: "top-center", // Show toast in the center
      });
      onDelete(_id);
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error deleting product");
    }
  };

  return (
    <div className="w-full">
      <div className="card bg-base-100 shadow-xl border border-gray-200 h-full flex flex-col">
        <figure className="px-4 pt-4">
          <img
            src={image_url}
            alt={name}
            className="rounded-xl w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body flex flex-col flex-grow">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-yellow-500">
              Rating: {rating}
            </h3>
            <h3 className="text-lg font-semibold text-gray-700">
              Price: ${price}
            </h3>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link
              role="button"
              onClick={handleDelete}
              className="btn btn-error text-white"
            >
              Delete
            </Link>
            <Link
              to={`update/${_id}`}
              className="btn btn-warning text-white ml-2"
            >
              Update
            </Link>
            <Link
              to={`details/${_id}`}
              className="btn btn-success text-white ml-2"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ManageProductCard;
