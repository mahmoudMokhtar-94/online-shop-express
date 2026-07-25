import { Swiper, SwiperSlide } from "swiper/react";
import PageTransition from "../utility-components/PageTransition";
import { Frown } from "lucide-react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import ProductCard from "../product card/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsByCategory } from "../../slices/productsSlice";
import { useEffect } from "react";
import SkeletonProductSlider from "../../skeletons/SkeletonProductSlider";

export default function ProductSlider({ category, desc }) {
  const productsOfCategoryState = useSelector(
    (state) => state.productsOfCategory.productsOfCategory.products[category],
  );

  const isNetworkError = useSelector(
    (state) => state.productsOfCategory.isNetworkError,
  );

  //  Status of the request that fetchs products of specific category
  const catRequestStatus = useSelector(
    (state) => state.productsOfCategory.statusOfCategory[category],
  );
  //  Error Message of the request that fetchs products of specific category
  const catRequestErrorMessage = useSelector(
    (state) => state.productsOfCategory.errorOfCategory[category],
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (category) {
      dispatch(fetchProductsByCategory(category));
    }
  }, [category]);

  if (catRequestStatus === "pending") {
    return <SkeletonProductSlider />;
  }

  if (isNetworkError) {
    return null;
  }

  if (catRequestStatus === "rejected") {
    return <p>{catRequestErrorMessage}</p>;
  }

  if (
    catRequestStatus === "fulfilled" &&
    productsOfCategoryState.length === 0
  ) {
    return (
      <PageTransition>
        <div className="w-[70%] md:w-[60%] mx-auto border-[var(--border_color)] border-1 p-8 my-15 rounded-md shadow-md">
          <h2 className="text-[var(--main_color)] capitalize text-[28px] font-bold pb-3 border-b border-[var(--border_color)] mb-8">
            Oops! No products found in this category.
            <br />
            <span className="text-[18px] text-[var(--p_color)] font-normal">
              {" "}
              Please check for any spelling mistakes.
            </span>
          </h2>
          <div className="flex justify-center items-center">
            <Frown className="size-25 text-[#dc3545]" />
          </div>

          <Link to="/">
            <button className="duration-300 bg-[var(--main_color)] text-white w-full capitalize mt-6 font-bold text-[20px] p-2 hover:bg-transparent border-2 border-[var(--main_color)] hover:text-[var(--main_color)] cursor-pointer">
              back home
            </button>
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <div className="w-[90%] mx-auto mb-4">
      <div
        className="my-15 border-b border-[var(--border_color)] pb-4 relative
      before:content-[''] before:absolute
      before:w-[100px]
      before:h-[2px]
      before:bg-[var(--main_color)]
      before:left-0
      before:bottom-[-1px]"
      >
        <h2 className="capitalize text-[var(--main_color)] text-[30px] font-bold mb-3">
          {category?.replace("-", " ")}
        </h2>

        <p className="text-[var(--p_color)]">{desc}</p>
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
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {productsOfCategoryState?.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard p={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
