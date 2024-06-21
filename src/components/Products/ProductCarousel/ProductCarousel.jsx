import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductCarousel.css"; // Your custom CSS file

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  console.log(products)

  useEffect(() => {
    fetch("https://toritorkari-server.vercel.app/product")
      .then((res) => res.json())
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 8);
        setProducts(selected);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, // Adjust slidesToScroll as needed
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, // Adjust slidesToScroll as needed
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, // Adjust slidesToScroll as needed
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, // Adjust slidesToScroll as needed
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto my-10 overflow-hidden">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product._id} className="p-2">
            <div
              className="feature-image"
              style={{
                backgroundImage: `url(${product.image_url})`,
              }}
            >
              <h6 className="bg-gray-100 w-full p-4">{product.name}</h6>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
