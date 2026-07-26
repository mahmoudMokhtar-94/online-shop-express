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
    <div className="w-[95%] lg:w-[90%] mx-auto my-7">
      <Swiper
        loop={true}
        pagination={true}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="
          h-[250px]
          sm:h-[320px]
          md:h-[400px]
          lg:h-[500px]
          xl:h-[580px]
          rounded-xl
          overflow-hidden
        "
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative">
          <img
            src={bannerHero1}
            alt="Banner 01"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/15"></div>

          <div
            className="
              absolute
              top-1/2
              -translate-y-1/2
              left-4
              sm:left-8
              md:left-12
              lg:left-16
              z-10
              max-w-[240px]
              sm:max-w-[320px]
              md:max-w-[420px]
            "
          >
            <h4 className="uppercase italic font-normal text-xs sm:text-sm md:text-base">
              Introducing the new
            </h4>

            <h3 className="mt-2 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[var(--main_color)]">
              Microsoft X Box
              <br />
              360 Controller
            </h3>

            <p className="mt-3 mb-5 text-xs sm:text-sm md:text-base text-gray-200">
              Windows XP / 7 / 8 / 10 • PS3 • TV Box
            </p>

            <Link to="/">
              <button
                className="
                  px-4 py-2
                  sm:px-6 sm:py-2
                  md:px-8 md:py-3
                  text-sm
                  sm:text-base
                  lg:text-lg
                  bg-[var(--main_color)]
                  text-white
                  rounded-full
                  transition
                  hover:scale-105
                "
              >
                Shop Now
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative">
          <img
            src={bannerHero2}
            alt="Banner 02"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20"></div>

          <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 md:left-12 lg:left-16 z-10 max-w-[240px] sm:max-w-[320px] md:max-w-[420px]">
            <h4 className="uppercase italic font-normal text-xs sm:text-sm md:text-base">
              Introducing the new
            </h4>

            <h3 className="mt-2 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[var(--main_color)]">
              Microsoft X Box
              <br />
              360 Controller
            </h3>

            <p className="mt-3 mb-5 text-xs sm:text-sm md:text-base text-gray-200">
              Windows XP / 7 / 8 / 10 • PS3 • TV Box
            </p>

            <Link to="/">
              <button className="px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 text-sm sm:text-base lg:text-lg bg-[var(--main_color)] text-white rounded-full transition hover:scale-105">
                Shop Now
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative">
          <img
            src={bannerHero3}
            alt="Banner 03"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20"></div>

          <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 md:left-12 lg:left-16 z-10 max-w-[240px] sm:max-w-[320px] md:max-w-[420px]">
            <h4 className="uppercase italic font-normal text-xs sm:text-sm md:text-base">
              Introducing the new
            </h4>

            <h3 className="mt-2 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[var(--main_color)]">
              Microsoft X Box
              <br />
              360 Controller
            </h3>

            <p className="mt-3 mb-5 text-xs sm:text-sm md:text-base text-gray-200">
              Windows XP / 7 / 8 / 10 • PS3 • TV Box
            </p>

            <Link to="/">
              <button className="px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 text-sm sm:text-base lg:text-lg bg-[var(--main_color)] text-white rounded-full transition hover:scale-105">
                Shop Now
              </button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
