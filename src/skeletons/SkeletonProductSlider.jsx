import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../skeleton.css";

// import required modules
import { Autoplay } from "swiper/modules";

// import ProductCard from "../components/product card/ProductCard";
import SkeletonProductCard from "./SkeletonProductCard";

export default function SkeletonProductSlider() {
  return (
    <div className="w-[90%] mx-auto mb-4">
      <div
        className="my-15 border-b border-[var(--border_color)] pb-4 relative  before:content-['']  before:absolute
    before:w-[100px]
    before:h-[2px]
    before:bg-gray-50
    before:left-0
    before:bottom-[-1px]"
      >
        <h2 className=" rect skeleton-content mb-3 w-[200px] h-[45px]"></h2>
        <p className="rect skeleton-content h-[24px]"></p>
      </div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {[
          {
            dummyProductTitle: "",
            dummyproductDescription: "",
            dummyProductId: 1,
          },
          {
            dummyProductTitle: "",
            dummyproductDescription: "",
            dummyProductId: 2,
          },
          {
            dummyProductTitle: "",
            dummyproductDescription: "",
            dummyProductId: 3,
          },
          {
            dummyProductTitle: "",
            dummyproductDescription: "",
            dummyProductId: 4,
          },
          {
            dummyProductTitle: "",
            dummyproductDescription: "",
            dummyProductId: 5,
          },
        ].map((product) => (
          <SwiperSlide key={product.dummyProductId}>
            <SkeletonProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
