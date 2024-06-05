import "./Bannar.css"

const Bannar = () => {
    return (
      <div>
        <div
          className="bannar"
          style={{
            backgroundImage:
              "url(https://preview.colorlib.com/theme/ogani/img/hero/banner.jpg.webp)",
          }}
        >
          <div className="container mx-auto bannar-content">
            <div className="">
              <h1 className="mb-5 text-5xl text-black font-bold">
                Vegetable <br /> 100% Organic
              </h1>
              <p className="mb-5 text-gray-700">
                Free Pickup and Delivery Available
              </p>
              <button className="btn btn-success text-white">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Bannar;