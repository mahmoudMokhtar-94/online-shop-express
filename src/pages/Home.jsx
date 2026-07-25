import HeroSlider from "../components/hero slider/HeroSlider";
import ProductSlider from "../components/product slider/ProductSlider";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategoriesList } from "../slices/categoriesSlice";
import { useEffect } from "react";
import PageTransition from "../components/utility-components/PageTransition";
import { WifiOff } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchProductsByCategory } from "../slices/productsSlice";
import Login from "./Login";
function Home() {
  const categoriesListState = useSelector(
    (state) => state.categories.categoriesList,
  );
  const isNetworkError = useSelector(
    (state) => state.productsOfCategory.isNetworkError,
  );
  const token = useSelector((state) => state.authCredentials.token);
  const isLoggedIn = !!token;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, []);

  useEffect(() => {
    dispatch(fetchProductsByCategory(categoriesListState[0]));
    dispatch(fetchProductsByCategory(categoriesListState[4]));
    dispatch(fetchProductsByCategory(categoriesListState[8]));
    dispatch(fetchProductsByCategory(categoriesListState[9]));
  }, []);

  if (isNetworkError) {
    return (
      <PageTransition>
        <div>
          <HeroSlider />
          <div className="w-[70%] md:w-[60%] mx-auto border-[var(--border_color)] border-1 p-8 my-15 rounded-md shadow-md">
            <h2 className="text-[var(--main_color)] capitalize text-[28px] font-bold pb-3 border-b border-[var(--border_color)] mb-8">
              no internet connection
            </h2>
            <p>Kindly check your connection and try again.</p>
            <div className="flex justify-center items-center mt-4">
              <WifiOff className="size-25 text-[#dc3545]" />
            </div>

            <Link to="/">
              <button className="duration-300 bg-[var(--main_color)] text-white w-full capitalize mt-6 font-bold text-[20px] p-2 hover:bg-transparent border-2 border-[var(--main_color)] hover:text-[var(--main_color)] cursor-pointer">
                back home
              </button>
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <PageTransition>
      <div>
        <HeroSlider />
        <ProductSlider
          category={categoriesListState[0]}
          desc={`Browse our collection of ${categoriesListState[0]} and discover high-quality products at competitive prices.`}
        />
        <ProductSlider
          category={categoriesListState[4]}
          desc={`Browse our collection of ${categoriesListState[4]} and discover high-quality products at competitive prices.`}
        />
        <ProductSlider
          category={categoriesListState[8]}
          desc={`Browse our collection of ${categoriesListState[8]} and discover high-quality products at competitive prices.`}
        />
        <ProductSlider
          category={categoriesListState[9]}
          desc={`Browse our collection of ${categoriesListState[9]} and discover high-quality products at competitive prices.`}
        />
      </div>
    </PageTransition>
  );
}

export default Home;
