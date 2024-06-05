import Bannar from "../components/Home/Bannar";
import FeaturedProduct from "../components/Products/FeaturedProduct";
import ProductCarousel from "../components/Products/ProductCarousel";



const Home = () => {
    return (
        <div>
            <Bannar />
            <ProductCarousel />
            <FeaturedProduct/>
        </div>
    );
};

export default Home;