import Bannar from "../components/Home/Bannar";
import FeaturedProduct from "../components/Products/FeaturedProduct";
import HomeProduct from "../components/Products/HomeProduct";
import BlogCard from "../components/shared/BlogCard";
import ContactCard from "../components/shared/ContactCard";



const Home = () => {
    return (
      <div>
        <Bannar />
        <FeaturedProduct />
        <div className="container mx-auto my-20">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="w-full ">
              <img
                className="w-full h-auto"
                src="https://preview.colorlib.com/theme/ogani/img/banner/banner-1.jpg"
                alt="Banner 1"
              />
            </div>
            <div className="w-full ">
              <img
                className="w-full h-auto"
                src="https://preview.colorlib.com/theme/ogani/img/banner/banner-2.jpg"
                alt="Banner 2"
              />
            </div>
          </div>
        </div>

        <HomeProduct />
        <div className="bg-gray-100 py-10">
          <div className="container mx-auto my-20">
            <ContactCard />
          </div>
        </div>
        <div className="container mx-auto my-20">
          <h1 className="mb-10 text-black text-center">
            From The Blog
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            <BlogCard />
          </div>
        </div>
      </div>
    );
};

export default Home;