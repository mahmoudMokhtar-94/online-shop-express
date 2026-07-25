import { Link } from "react-router-dom";
import "./product-card.css";
import { Star, ShoppingCart, HeartPlus, Share2, Check } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../slices/cartSlice";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../slices/favoritesSlice";
import { useToast } from "../../contexts/ToastContext";

function ProductCard({ p }) {
  const cartProducts = useSelector((state) => state.cartProducts.cartProducts);
  const favProducts = useSelector((state) => state.favProducts.favProducts);
  const dispatch = useDispatch();
  let isInCart = cartProducts.some((cartProduct) => cartProduct.id === p.id);
  let isInFav = favProducts.some((favProduct) => favProduct.id === p.id);
  const { showHideToast } = useToast();
  const token = useSelector((state) => state.authCredentials.token);
  const isLoggedIn = !!token;

  function handleCartClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (isInCart) {
      // The product is already in the cart, so REMOVE It
      dispatch(removeFromCart(p));
      showHideToast("Removed from your cart", "danger");
    } else {
      // The product is not in the cart yet, so ADD It
      const productToBeAdded = { ...p, orderedQuantity: 1 };
      dispatch(addToCart({ product: productToBeAdded }));
      showHideToast("Added to your cart", "success");
    }
  }

  function handleFavoriteClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (isInFav) {
      // The product is already in your Favorites, SO Remove It
      dispatch(removeFromFavorites(p));
      showHideToast("Removed from your favorite list", "danger");
    } else {
      // The product is not in the favorites list yet, so ADD It
      dispatch(addToFavorites({ product: p }));
      showHideToast("Added to your favorite list", "success");
    }
  }

  return (
    <Link to={`/products/${p.id}`}>
      <div
        className={`product-card transition duration-300 border border-[var(--border_color)] rounded-md w-[240px] mx-auto px-4 py-5 relative overflow-hidden hover:border-[var(--main_color)] bg-white ${isInCart ? "active-product-card" : ""} ${isInFav ? "in-favorite-product" : ""}`}
      >
        <div className="flex justify-center items-center in-cart-label absolute left-1/2 -translate-x-1/2   duration-300 text-[14px] gap-1">
          <Check className="text-[#2cfc03]" />
          <span className="capitalize font-bold text-[var(--color_heading)]">
            in cart
          </span>
        </div>
        <img src={p.thumbnail} alt="Product Image" />
        <h3 className="product-title my-2 text-[18px] text-[var(--color_heading)] truncate">
          {p.title}
        </h3>
        <div className="flex">
          <Star className="star-icon" />
          <Star className="star-icon" />
          <Star className="star-icon" />
          <Star className="star-icon" />
          <Star className="star-icon" />
        </div>
        <p className="product-price my-4 text-[var(--main_color)] text-[24px] font-bold">
          $ {p.price}
        </p>
        <div className="product-card-actions duration-300 absolute top-1/2 right-[-50px] -translate-y-1/2">
          <button
            className={`cart-btn size-[30px] rounded-full bg-[#EBEBEB] flex justify-center items-center mb-3 cursor-pointer ${isLoggedIn ? "block" : "hidden"}`}
            onClick={handleCartClick}
          >
            <ShoppingCart
              size={18}
              className="cart-icon text-[var(--main_color)] duration-300 hover:rotate-360"
            />
          </button>

          <button
            className={`fav-btn size-[30px] bg-[#ebebeb] rounded-full  flex justify-center items-center mb-3 cursor-pointer ${isLoggedIn ? "block" : "hidden"}`}
            onClick={handleFavoriteClick}
          >
            <HeartPlus
              size={18}
              className="heart-icon text-[var(--main_color)] duration-300 hover:rotate-360"
            />
          </button>

          <button
            className={`size-[30px] rounded-full bg-[#EBEBEB] flex justify-center items-center mb-3 cursor-pointer ${isLoggedIn ? "block" : "hidden"}`}
          >
            <Share2
              size={18}
              className="text-[var(--main_color)] duration-300 hover:rotate-360"
            />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
