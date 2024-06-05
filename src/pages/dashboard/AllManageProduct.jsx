import ManageProduct from "../../components/Dashboard/Product/ManageProduct";


const AllManageProduct = () => {
    return (
      <div className="container mx-auto p-6">
        <h1 className="mb-5 text-3xl text-black font-bold text-center">
          Manage Product
        </h1>
        <p className="font-bold mb-5">Here you manage your product</p>
        <ManageProduct />
      </div>
    );
};

export default AllManageProduct;