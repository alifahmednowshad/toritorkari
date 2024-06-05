import { useEffect, useState } from "react";
import ProductCarousel from "./ProductCarousel";

const FeaturedProduct = () => {
    const [products, setProducts] = useState([]);
    console.log(products)

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  },[]);

  return (
    <div className="container mx-auto my-20">
      <h1 className="mb-5 text-5xl text-black font-bold text-center">
        Featured Product
      </h1>
      <ProductCarousel/>
    </div>
  );
};

export default FeaturedProduct;
