import { useEffect, useState } from "react";
import { LoaderIcon } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`https://toritorkari-server.vercel.app/product/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl">
          Loading <LoaderIcon />
        </div>
      </div>
    );
  }

  const { name, price, description, rating, image_url } = product;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-[600px] object-cover"
            src={image_url}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-lg font-light">{description}</p>
          <div className="card-actions justify-between mt-4">
            <h3 className=" text-gray-700">{price} $$</h3>
            <div className=" text-yellow-500">Rating: {rating}</div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <button className="btn btn-wide btn-outline">
          <Link to={"/shop"}>Back to Shop</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
