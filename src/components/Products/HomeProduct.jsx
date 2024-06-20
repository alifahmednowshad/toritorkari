import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://toritorkari-server.vercel.app/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="mb-10 text-black text-center">Shop Now</h1>
      <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.slice(0, 4).map((product) => (
          <div key={product._id} className="w-full">
            <div className="card bg-base-100 shadow-xl border border-gray-200 h-full flex flex-col">
              <figure className="px-4 pt-4">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="rounded-xl w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body flex flex-col flex-grow">
                <h4 className="">{product.name}</h4>
                <div className="flex justify-between">
                  <h5 className=" text-yellow-500">Rating: {product.rating}</h5>
                  <h5 className="text-gray-700">Price: ${product.price}</h5>
                </div>
                <div className="flex items-center justify-end mt-4">
                  <Link
                    to={"/shop"}
                    className="btn btn-success text-white ml-2"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProduct;
