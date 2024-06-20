import { Link } from "react-router-dom";
import "./Bannar.css";

const Bannar = () => {
  return (
    <div>
      <div className="bannar">
        <div className="container mx-auto bannar-content">
          <div className="text-center md:text-left">
            <h1 className="mb-5 text-4xl md:text-6xl text-black font-bold">
              Vegetable <br /> 100% Organic
            </h1>
            <p className="mb-5 text-gray-700 text-lg">
              Free Pickup and Delivery Available
            </p>
            <Link to="/shop">
              <button className="btn btn-success text-white">SHOP NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
