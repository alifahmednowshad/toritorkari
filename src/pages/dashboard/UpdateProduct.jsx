import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const token = localStorage.getItem("token");
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image_url: "",
    rating: 0,
    category: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Error fetching product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

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
      await axios.patch(
        `http://localhost:5000/product/${product._id}`,
        product,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Product updated successfully");
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Error updating product");
    }
  };

  return (
    <div className="w-8/12 mx-auto p-4 my-5">
      <h1 className="text-3xl font-bold mb-8 text-center">Update Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div>
          <label htmlFor="name" className="block mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Name"
            className={`input bg-gray-100 p-5 w-full border border-black rounded-lg mt-3 ${
              errors.name ? "border-red-500" : ""
            }`}
            required
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="price" className="block mb-2">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
            className={`input bg-gray-100 p-5 w-full border border-black rounded-lg mt-3 ${
              errors.price ? "border-red-500" : ""
            }`}
            required
          />
          {errors.price && <p className="text-red-500">{errors.price}</p>}
        </div>
        <div>
          <label htmlFor="description" className="block mb-2">
            Description:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
            className={`input bg-gray-100 p-5 w-full border border-black rounded-lg mt-3 ${
              errors.description ? "border-red-500" : ""
            }`}
            required
          />
          {errors.description && (
            <p className="text-red-500">{errors.description}</p>
          )}
        </div>
        <div>
          <label htmlFor="image_url" className="block mb-2">
            Image URL:
          </label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={product.image_url}
            onChange={handleChange}
            placeholder="Image URL"
            className={`input bg-gray-100 p-5 w-full border border-black rounded-lg mt-3 ${
              errors.image_url ? "border-red-500" : ""
            }`}
            required
          />
          {errors.image_url && (
            <p className="text-red-500">{errors.image_url}</p>
          )}
        </div>
        <div>
          <label htmlFor="rating" className="block mb-2">
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={product.rating}
            onChange={handleChange}
            placeholder="Rating"
            className={`input bg-gray-100 p-5 w-full border border-black rounded-lg mt-3 ${
              errors.rating ? "border-red-500" : ""
            }`}
            required
          />
          {errors.rating && <p className="text-red-500">{errors.rating}</p>}
        </div>
        <div>
          <label htmlFor="category" className="block mb-2">
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Category"
            className={`input bg-gray-100 p-5 w-full border border-black rounded-lg mt-3 ${
              errors.category ? "border-red-500" : ""
            }`}
            required
          />
          {errors.category && <p className="text-red-500">{errors.category}</p>}
        </div>
        <button
          type="submit"
          className="btn bg-red-500 text-white p-3 rounded-lg block w-full uppercase tracking-wide font-semibold transition duration-300 ease-in-out hover:bg-red-600"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Product"}
        </button>
      </form>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default UpdateProduct;
