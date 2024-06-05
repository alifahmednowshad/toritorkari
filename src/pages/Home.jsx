import Bannar from "../components/Home/Bannar";
import FeaturedProduct from "../components/Products/FeaturedProduct";
import BlogCard from "../components/shared/BlogCard";
import ContactCard from "../components/shared/ContactCard";



const Home = () => {
    return (
      <div>
        <Bannar />
        <FeaturedProduct />
        <div className="container mx-auto my-20">
          <div className="w-full flex gap-5 justify-between">
            <div className="w-1/2">
              <img
                className="w-screen"
                src="https://preview.colorlib.com/theme/ogani/img/banner/banner-1.jpg"
                alt=""
              />
            </div>
            <div className="w-1/2">
              <img
                className="w-screen"
                src="https://preview.colorlib.com/theme/ogani/img/banner/banner-2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-10">
          <div className="container mx-auto my-20">
            <ContactCard />
          </div>
        </div>
        <div className="container mx-auto my-20">
          <h1 className="mb-10 text-5xl text-black font-bold text-center">
            From The Blog
          </h1>
          <div className="grid gap-10 grid-cols-1 lg:grid-cols-3">
            <BlogCard />
          </div>
        </div>
      </div>
    );
};

export default Home;