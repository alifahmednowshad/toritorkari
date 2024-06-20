import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

// eslint-disable-next-line react/prop-types
const AllProduct = ({ category, sortOption }) => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("https://toritorkari-server.vercel.app/product")
      .then((res) => res.json())
      .then((data) => {
        let filteredProducts = data;

        // Filter by category
        if (category !== "All") {
          filteredProducts = filteredProducts.filter(
            (product) => product.category === category
          );
        }

        // Sort products
        switch (sortOption) {
          case "priceLowToHigh":
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
          case "priceHighToLow":
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
          case "ratingHighToLow":
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
          default:
            break;
        }

        setProducts(filteredProducts);
      });
  }, [category, sortOption]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <SingleProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
