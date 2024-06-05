/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {

  const { _id, name, price, rating, image_url } = product;

  return (
    <div>
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
            <h2 className="card-title text-xl font-bold">{name}</h2>
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold text-yellow-500">
                Rating: {rating}
              </h3>
              <h3 className="text-md font-semibold text-gray-700">
                Price: ${price}
              </h3>
            </div>
            <div className="flex items-center justify-end mt-4">
              <Link
                to={`/product/${_id}`}
                className="btn btn-success text-white ml-2"
              >
                See Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
