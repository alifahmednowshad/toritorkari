import AllProduct from "../components/Products/AllProduct";


const Shop = () => {
    return (
      <div className="container mx-auto">
        <h3 className="mb-5 text-xl text-black font-bold">
          Shop Now <span className="text-green-600">!</span>
        </h3>
        <h1 className="mb-5 text-4xl text-black font-bold text-center">
          All Products
        </h1>
        <AllProduct />
      </div>
    );
};

export default Shop;