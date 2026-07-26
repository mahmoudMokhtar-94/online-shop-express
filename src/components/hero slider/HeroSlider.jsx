import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import bannerHero1 from "../../images/banner_Hero1.jpg";
import bannerHero2 from "../../images/banner_Hero2.jpg";
import bannerHero3 from "../../images/banner_Hero3.jpg";

function HeroSlider() {
  return (
    <div className="py-5 w-[90%] mx-auto my-7 relative">
      <Swiper
        loop={true}
        pagination={true}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper size-full"
      >
        {/* Start Slide 01  */}
        <SwiperSlide className="text-[18px] bg-gray-100">
          <div className="content absolute top-1/2 -translate-y-1/2 left-[5%]">
            <h4 className="uppercase text-[15px] sm:text-[1.3vw] italic font-normal">
              introducing the new
            </h4>
            <h3 className="capitalize text-[17px] sm:text-[2.8vw] font-extrabold leading-[1.1] mb-7 text-[var(--main_color)]">
              microsoft x box <br /> 360 controller
            </h3>
            <p className="text-[var(--p_color)] text-[14px] sm:text-[1.1vw] mt-2 mb-10">
              Windows Xp/7/8/10 Ps3, Tv Box
            </p>
            <Link to="/" className="capitalize">
              <button className="py-1 px-4  sm:px-10 sm:py-1.25 text-[16px] sm:text-[18px]  bg-[var(--main_color)] text-white capitalize rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105 sm:hover:scale-107">
                shop now
              </button>
            </Link>
          </div>
          <img
            src={bannerHero1}
            alt="Banner 01- of Home Slider"
            className="block size-full object-cover"
          />
        </SwiperSlide>
        {/* End Slide 01  */}

        {/* Start Slide 02  */}
        <SwiperSlide className="text-[18px] bg-gray-100 h-[420px]">
          <div className="content absolute top-1/2 -translate-y-1/2 left-[5%]">
            <h4 className="uppercase text-[15px] sm:text-[1.3vw] italic font-normal">
              introducing the new
            </h4>
            <h3 className="capitalize text-[17px] sm:text-[2.8vw] font-extrabold leading-[1.1] mb-7 text-[var(--main_color)]">
              microsoft x box <br /> 360 controller
            </h3>
            <p className="text-[var(--p_color)] text-[14px] sm:text-[1.1vw] mt-2 mb-10">
              Windows Xp/7/8/10 Ps3, Tv Box
            </p>
            <Link to="/" className="capitalize">
              <button className="py-1 px-4  sm:px-10 sm:py-1.25 text-[16px] sm:text-[18px]  bg-[var(--main_color)] text-white capitalize rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105 sm:hover:scale-107">
                shop now
              </button>
            </Link>
          </div>
          <img
            src={bannerHero2}
            alt="Banner 02- of Home Slider"
            className="block size-full object-cover"
          />
        </SwiperSlide>
        {/* End Slide 02  */}

        {/* Start Slide 03  */}
        <SwiperSlide className="text-[18px] bg-gray-100 h-[420px]">
          <div className="content absolute top-1/2 -translate-y-1/2 left-[5%]">
            <h4 className="uppercase text-[15px] sm:text-[1.3vw] italic font-normal">
              introducing the new
            </h4>
            <h3 className="capitalize text-[17px] sm:text-[2.8vw] font-extrabold leading-[1.1] mb-7 text-[var(--main_color)]">
              microsoft x box <br /> 360 controller
            </h3>
            <p className="text-[var(--p_color)] text-[14px] sm:text-[1.1vw] mt-2 mb-10">
              Windows Xp/7/8/10 Ps3, Tv Box
            </p>
            <Link to="/" className="capitalize">
              <button className="py-1 px-4  sm:px-10 sm:py-1.25 text-[16px] sm:text-[18px]  bg-[var(--main_color)] text-white capitalize rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105 sm:hover:scale-107">
                shop now
              </button>
            </Link>
          </div>
          <img
            src={bannerHero3}
            alt="Banner 03- of Home Slider"
            className="block size-full object-cover"
          />
        </SwiperSlide>
        {/* End Slide 03  */}
      </Swiper>
    </div>
  );
}

export default HeroSlider;
