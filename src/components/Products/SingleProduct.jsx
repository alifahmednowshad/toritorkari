/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {

  const { _id, name, price, description, rating, image_url } = product;

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl border border-inherite">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h3 className="text-xl font-semibold">{rating}</h3>
          <h3 className="text-xl font-semibold">{price}</h3>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-success text-white">
              <Link to={`/product/${_id}`}>See details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
