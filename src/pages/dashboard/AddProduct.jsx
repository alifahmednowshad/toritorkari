import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image_url: "",
    rating: 0,
    category: "",
  });
  const [errors, setErrors] = useState({});

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!product.name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!product.price || isNaN(product.price) || product.price <= 0) {
      errors.price = "Price must be a positive number";
      isValid = false;
    }

    if (!product.description) {
      errors.description = "Description is required";
      isValid = false;
    }

    if (!product.image_url) {
      errors.image_url = "Image URL is required";
      isValid = false;
    }

    if (
      !product.rating ||
      isNaN(product.rating) ||
      product.rating < 0 ||
      product.rating > 5
    ) {
      errors.rating = "Rating must be a number between 0 and 5";
      isValid = false;
    }

    if (!product.category) {
      errors.category = "Category is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await axios.post("http://localhost:5000/product", product, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Product added successfully");
      setProduct({
        name: "",
        price: 0,
        description: "",
        image_url: "",
        rating: 0,
        category: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Error adding product");
    }
  };

  return (
    <div className="w-8/12 mx-auto p-4 my-5">
      <h1 className="text-2xl font-bold mb-4">Add a Product</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name:
          </label>
          <input
            id="name"
            className="bg-gray-100 p-2 w-full border border-black rounded-lg"
            type="text"
            name="name"
            placeholder="Name"
            value={product.name}
            onChange={handleChange}
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2">
            Price:
          </label>
          <input
            id="price"
            className="bg-gray-100 p-2 w-full border border-black rounded-lg"
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            required
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2">
            Description:
          </label>
          <input
            id="description"
            className="bg-gray-100 p-2 w-full border border-black rounded-lg"
            type="text"
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
            required
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="image_url" className="block mb-2">
            Image URL:
          </label>
          <input
            id="image_url"
            className="bg-gray-100 p-2 w-full border border-black rounded-lg"
            type="text"
            name="image_url"
            placeholder="Image URL"
            value={product.image_url}
            onChange={handleChange}
            required
          />
          {errors.image_url && (
            <p className="text-red-500 text-sm mt-1">{errors.image_url}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block mb-2">
            Rating:
          </label>
          <input
            id="rating"
            className="bg-gray-100 p-2 w-full border border-black rounded-lg"
            type="number"
            name="rating"
            placeholder="Rating"
            value={product.rating}
            onChange={handleChange}
            step="0.1"
            min="0"
            max="5"
            required
          />
          {errors.rating && (
            <p className="text-red-500 text-sm mt-1">{errors.rating}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2">
            Category:
          </label>
          <input
            id="category"
            className="bg-gray-100 p-2 w-full border border-black rounded-lg"
            type="text"
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
            required
          />
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">{errors.category}</p>
          )}
        </div>

        <button
          className="btn mt-4 w-full bg-red-500 text-white p-2"
          type="submit"
        >
          Add Product
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default AddProduct;
