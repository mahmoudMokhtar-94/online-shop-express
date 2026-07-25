import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { Heart, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import SearchForm from "../SearchForm";

function TopHeader() {
  const cartProducts = useSelector((state) => state.cartProducts.cartProducts);
  const favProducts = useSelector((state) => state.favProducts.favProducts);

  const token = useSelector((state) => state.authCredentials.token);
  const user = useSelector((state) => state.authCredentials.user);
  const firstName = user?.firstName || "";

  const isLoggedIn = !!token;

  return (
    <section>
      <div className="top-header-container w-[90%] mx-auto flex py-4 items-center justify-between flex-col md:flex-row">
        <div className="w-[160px]">
          <Link to="/">
            <img className="w-full" src={logo} alt="Brand Logo" />
          </Link>
        </div>

        <SearchForm />

        <div className="flex items-center">
          <span
            className={`mr-3 font-bold text-[var(--color_heading)] ${isLoggedIn ? "inline-block" : "hidden"}`}
          >
            Hi, {firstName}
          </span>
          <Link
            to="/favorites"
            className={`${isLoggedIn ? "block" : "hidden"}`}
          >
            <div className="icon relative">
              <Heart className="text-[var(--color_heading)] cursor-pointer transition duration-300 hover:text-[var(--main_color)]" />
              <span className="count absolute bottom-3 left-4 bg-[var(--main_color)] size-5 rounded-full text-white flex justify-center items-center text-sm select-none">
                {favProducts.length}
              </span>
            </div>
          </Link>
          <Link to="/cart" className={`${isLoggedIn ? "block" : "hidden"}`}>
            <div className="icon relative ml-8">
              <ShoppingCart className="text-[var(--color_heading)] cursor-pointer transition duration-300 hover:text-[var(--main_color)]" />
              <span className="count absolute bottom-3 left-4 bg-[var(--main_color)] size-5 rounded-full text-white flex justify-center items-center text-sm select-none">
                {cartProducts.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TopHeader;
