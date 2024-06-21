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
      <h2 className="my-8 text-black text-center">Shop Now</h2>
      <div className="drawer gap-5 lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary mb-5 rounded-none drawer-button lg:hidden"
          >
            Open Menu Filter
          </label>
          <div className="mb-10">
            <AllProduct category={category} sortOption={sortOption} />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 min-h-full bg-base-200 text-base-content">
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
        </div>
      </div>
    </div>
  );
};

export default Shop;
