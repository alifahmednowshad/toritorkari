// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://toritorkari-server.vercel.app/product")
      .then((res) => res.json())
      .then((data) => {
        // Shuffle the array
        const shuffled = data.sort(() => 0.5 - Math.random());
        // Get the first 8 items
        const selected = shuffled.slice(0, 8);
        setProducts(selected);
      });
  }, []);

  return (
    <div className="container mx-auto my-10">
      <Swiper
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <div className="card w-full bg-base-100 shadow relative">
              <div
                className="h-50 md:h-72 lg:h-96 rounded bg-cover bg-center"
                style={{
                  backgroundImage: `url(${product.image_url})`,
                }}
              ></div>
              <div className="absolute bottom-0 w-full flex justify-center">
                <div className="bg-white bg-opacity-75 p-4 w-10/12 mb-4 text-center rounded-b-lg">
                  <p className="font-bold text-lg uppercase">
                    {product.category}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
