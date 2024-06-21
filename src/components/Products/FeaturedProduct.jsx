import ProductCarousel from "./ProductCarousel/ProductCarousel";


const FeaturedProduct = () => {
  return (
    <div className="container mx-auto my-10 sm:my-20">
      <h1 className="sm:mb-5 text-black  text-center">
        Featured Product
      </h1>
      <ProductCarousel />
    </div>
  );
};

export default FeaturedProduct;
