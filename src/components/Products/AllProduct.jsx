import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";


const AllProduct = () => {
        const [products, setProducts] = useState([]);
        console.log(products);

        useEffect(() => {
          fetch("http://localhost:5000/product")
            .then((res) => res.json())
            .then((data) => setProducts(data));
        }, []);
    return (
      <div className="container mx-auto">
        <div className="my-16 grid grid-cols-3 gap-5">
          {products.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
};

export default AllProduct;