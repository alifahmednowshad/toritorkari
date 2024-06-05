import { useEffect, useState } from "react";

const FeaturedProduct = () => {
    const [products, setProducts] = useState([]);
    console.log(products)

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

  return (
    <div className="container mx-auto">
      <h1 className="mb-5 text-5xl text-black font-bold text-center">
        Featured Product
      </h1>
      <div className="flex justify-center items-center gap-5 text-xl">
        <div>All</div>
        <div>Fresh Meat </div>
        <div>Vegetables</div>
        <div>Fastfood</div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
