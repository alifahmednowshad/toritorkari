// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ProductCarousel = () => {
  return (
    <div className="container mx-auto my-10">
      <Swiper
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
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
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={index}>
              <div className="card w-full bg-base-100 shadow relative">
                <div
                  className="h-64 md:h-72 lg:h-96 rounded bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://preview.colorlib.com/theme/ogani/img/categories/cat-5.jpg.webp')",
                  }}
                ></div>
                <div className="absolute bottom-0 w-full flex justify-center">
                  <div className="bg-white bg-opacity-75 p-4 w-10/12 mb-4 text-center rounded-b-lg">
                    <p className="font-bold text-lg uppercase">Drink Fruits</p>
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
