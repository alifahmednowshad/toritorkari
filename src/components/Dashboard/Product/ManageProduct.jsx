import { useEffect, useState } from "react";
import ManageProductCard from "./ManageProductCard";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://toritorkari-server.vercel.app/product")
      .then((res) => res.json())
      .then((data) => setProducts(data.reverse()));
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <ManageProductCard
            key={product._id}
            product={product}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageProduct;
