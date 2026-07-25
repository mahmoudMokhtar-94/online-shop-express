import { Star, ShoppingCart, CheckCheck, HeartCrack } from "lucide-react";
import "./product-details.css";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProductById } from "../slices/productsSlice";
import ProductSlider from "../components/product slider/ProductSlider";
import { fetchCategoriesList } from "../slices/categoriesSlice";
import SkeletonProductDetails from "../skeletons/SkeletonProductDetails";
import SkeletonProductSlider from "../skeletons/SkeletonProductSlider";
import { addToCart } from "../slices/cartSlice";
import PageTransition from "../components/utility-components/PageTransition";
function ProductDetails() {
  const { productID } = useParams();
  const productState = useSelector((state) => state.productsOfCategory.product);
  //  Error Message of the request that fetchs a product of specific ID
  const productRequestErrorMessage = useSelector(
    (state) => state.productsOfCategory.errorOfID,
  );
  const categoriesListState = useSelector(
    (state) => state.categories.categoriesList,
  );
  const cartProducts = useSelector((state) => state.cartProducts.cartProducts);

  const isInCart = cartProducts.some(
    (cartProduct) => cartProduct.id == productID,
  );

  // Status of the request that fetchs product of specific id
  const idRequestStatus = useSelector(
    (state) => state.productsOfCategory.statusOfID,
  );

  const dispatch = useDispatch();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const token = useSelector((state) => state.authCredentials.token);
  const isLoggedIn = !!token;

  useEffect(() => {
    dispatch(fetchProductById(productID));
  }, [productID]);

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedImageIndex(0);
  }, [productID]);

  function handleImageClick(index) {
    setSelectedImageIndex(index);
  }

  const currentCategory = categoriesListState.find(
    (category) => category === productState.category,
  );

  function handleAddToCartClick() {
    if (!isInCart) {
      const productToBeAdded = { ...productState, orderedQuantity: 1 };
      dispatch(addToCart({ product: productToBeAdded }));
    } else {
      console.log(`Product ${productState.title} is ALREADY in your cart`);
    }
  }

  return idRequestStatus === "pending" ? (
    <div className="w-[90%] mx-auto">
      <SkeletonProductDetails />
      <SkeletonProductSlider />
    </div>
  ) : idRequestStatus === "fulfilled" ? (
    <div className="w-[90%] mx-auto">
      <div className="flex flex-col-reverse items-center sm:flex-row">
        <div className="w-[300px] lg:w-[430px]">
          <img
            src={
              productState.images?.[selectedImageIndex] ?? productState.thumbnai
            }
            alt={productState.description}
            className="w-full"
          />
        </div>
        <div className="flex-1 p-5">
          <h2 className="text-[var(--main_color)] text-[29px] font-bold mb-5">
            {productState.title}
          </h2>
          <div className="icons flex">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className="text-[var(--p_color)] text-[22px] my-5 font-medium">
            $ {productState.price}
          </p>
          <p className="my-5">
            <span className="font-bold text-[var(--color_heading)] capitalize">
              availability:{" "}
            </span>
            <span className="text-[var(--main_color)] font-medium">
              {productState.availabilityStatus}
            </span>
          </p>
          <p>
            <span className="font-bold text-[var(--color_heading)] capitalize">
              brand:{" "}
            </span>
            <span className="text-[var(--main_color)] font-medium">
              {productState.brand}
            </span>
          </p>
          <p className="text-[var(--p_color)] leading-relaxed my-5">
            {productState.description}
          </p>
          <h3
            className={`text-[var(--main_color)] text-[20px] my-5 ${isLoggedIn ? "block" : "hidden"}`}
          >
            Hurry Up! Only {productState.stock} products left in stock.
          </h3>
          {!isInCart && isLoggedIn ? (
            <button
              onClick={handleAddToCartClick}
              className="py-2 px-5 sm:px-6 sm:py-3 text-[16px] sm:text-[17px]  bg-[var(--main_color)] text-white capitalize cursor-pointer transition-transform duration-300 hover:scale-105 sm:hover:scale-107 flex gap-3 mx-auto sm:mx-0"
            >
              <span>add to cart</span>
              <ShoppingCart />
            </button>
          ) : isInCart && isLoggedIn ? (
            <div className="flex gap-2 items-center bg-[#dcfce7] text-[#166534] w-fit py-2 px-4">
              <CheckCheck />
              <p className="select-none">
                This product is already in your cart
              </p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex p-3">
        {" "}
        <div className="flex gap-4 flex-wrap justify-center">
          {" "}
          {productState.images?.map((imageSrc, index) => (
            <img
              key={imageSrc}
              className="w-[150px] cursor-pointer shadow-xl"
              onClick={() => {
                handleImageClick(index);
              }}
              src={imageSrc}
              alt={productState.title}
            />
          ))}
        </div>
      </div>

      {currentCategory ? (
        <ProductSlider
          category={currentCategory}
          desc={`Browse our collection of ${currentCategory} and discover high-quality products at competitive prices.`}
        />
      ) : (
        ""
      )}
    </div>
  ) : (
    <PageTransition>
      <div className="w-[70%] md:w-[60%] mx-auto border-[var(--border_color)] border-1 p-8 my-15 rounded-md shadow-md">
        <h2 className="text-[var(--main_color)] capitalize text-[28px] font-bold pb-3 border-b border-[var(--border_color)] mb-8">
          {productRequestErrorMessage}
        </h2>
        <div className="flex justify-center items-center">
          <HeartCrack className="size-25 text-[#dc3545]" />
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

export default ProductDetails;
