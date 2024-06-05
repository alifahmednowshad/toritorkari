import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddProduct = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = parseFloat(form.price.value);
    const description = form.description.value;
    const image_url = form.image_url.value;
    const rating = parseFloat(form.rating.value);
    const category = form.category.value;

    const data = { name, price, description, image_url, rating, category };

    try {
      // Send product data to your backend API for insertion
      await axios.post("http://localhost:5000/product", data);
      toast.success("Product added successfully");
      console.log("product added successfully")
      form.reset();
    } catch (error) {
      console.error("Error adding product:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a Product</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="bg-gray-100 p-2 w-full border border-black rounded-lg mt-3"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="bg-gray-100 p-2 w-full border border-black rounded-lg mt-3"
          type="number"
          name="price"
          placeholder="Price"
          required
        />
        <input
          className="bg-gray-100 p-2 w-full border border-black rounded-lg mt-3"
          type="text"
          name="description"
          placeholder="Description"
          required
        />
        <input
          className="bg-gray-100 p-2 w-full border border-black rounded-lg mt-3"
          type="text"
          name="image_url"
          placeholder="Image URL"
          required
        />
        <input
          className="bg-gray-100 p-2 w-full border border-black rounded-lg mt-3"
          type="number"
          name="rating"
          placeholder="Rating"
          required
        />
        <input
          className="bg-gray-100 p-2 w-full border border-black rounded-lg mt-3"
          type="text"
          name="category"
          placeholder="Category"
          required
        />

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
