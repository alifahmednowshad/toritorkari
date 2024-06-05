import { useState } from "react";
import AllProduct from "../components/Products/AllProduct";

const Shop = () => {
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-xl my-8 text-black font-bold text-center">
        Shop Now
      </h1>
      <div className="flex">
        <div className="w-1/4 p-4 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <ul className="space-y-2">
            {[
              "All",
              "Fresh Meat",
              "Vegetables",
              "Fresh Fruit",
              "Nut Gifts",
              "Ocean Foods",
            ].map((cat) => (
              <li
                key={cat}
                className={`cursor-pointer ${
                  category === cat ? "font-bold" : ""
                }`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Sort By</h2>
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="default">Default</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="ratingHighToLow">Rating: High to Low</option>
          </select>
        </div>
        <div className="ms-5">
          <AllProduct category={category} sortOption={sortOption} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
