import ProductCarousel from "./ProductCarousel";

const FeaturedProduct = () => {
  return (
    <div className="container mx-auto my-20">
      <h1 className="mb-5 text-5xl text-black font-bold text-center">
        Featured Product
      </h1>
      <ProductCarousel />
    </div>
  );
};

export default FeaturedProduct;
