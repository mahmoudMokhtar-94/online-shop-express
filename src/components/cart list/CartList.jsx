import { useSelector } from "react-redux";
import CartItem from "../cart item/CartItem";
import "./cart-list.css";
import { Link } from "react-router-dom";
import PageTransition from "../utility-components/PageTransition";

export default function CartList() {
  const cartItems = useSelector((state) => state.cartProducts.cartProducts);
  const totalPrice = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.orderedQuantity * currentItem.price;
  }, 0);
  return cartItems.length > 0 ? (
    <PageTransition>
      <div className="cart-list w-[70%] md:w-[60%] mx-auto border-[var(--border_color)] border-1 p-8 my-15 rounded-md shadow-md h-[400px] overflow-y-auto">
        <h2 className="cart-list-heading text-[var(--main_color)] capitalize text-[28px] font-bold pb-3 border-b border-[var(--border_color)] mb-8">
          order summary
        </h2>
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <h3 className="capitalize text-[22px] text-[var(--color_heading)]">
            total:
          </h3>
          <span className="text-[var(--main_color)] text-[20px] font-bold p-2">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <button className="place-order-btn duration-300 bg-[var(--main_color)] text-white w-full capitalize mt-3 font-bold text-[20px] p-2 hover:bg-transparent border-2 border-[var(--main_color)] hover:text-[var(--main_color)] cursor-pointer">
          place order
        </button>
      </div>
    </PageTransition>
  ) : (
    <PageTransition>
      <div className="cart-list w-[70%] md:w-[60%] mx-auto border-[var(--border_color)] border-1 p-8 my-15 rounded-md shadow-md">
        <h2 className="cart-list-heading text-[var(--main_color)] capitalize text-[28px] font-bold pb-3 border-b border-[var(--border_color)] mb-8">
          Nothing here yet!
        </h2>
        <p className="capitalize text-[17px] text-[var(--color_heading)] tracking-wider">
          Add some amazing products to your cart and they'll appear here.
        </p>

        <Link to="/">
          <button className="place-order-btn duration-300 bg-[var(--main_color)] text-white w-full capitalize mt-6 font-bold text-[20px] p-2 hover:bg-transparent border-2 border-[var(--main_color)] hover:text-[var(--main_color)] cursor-pointer">
            continue shopping
          </button>
        </Link>
      </div>
    </PageTransition>
  );
}
