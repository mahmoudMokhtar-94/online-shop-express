import { Trash } from "lucide-react";
import {
  incrementOrderedQuantity,
  decrementOrderedQuantity,
} from "../../slices/cartSlice";
import { useDispatch } from "react-redux";
import { useAlert } from "../../contexts/AlertContext";

export default function CartItem({ item }) {
  const { showAlert } = useAlert();
  const dispatch = useDispatch();

  function handleDeleteClick() {
    showAlert(
      "Remove Item?",
      "This item will be removed from your cart. You can add it again anytime.",
      item,
    );
  }

  function handleIncrementClick() {
    dispatch(incrementOrderedQuantity(item));
  }

  function handleDecrementClick() {
    dispatch(decrementOrderedQuantity(item));
  }

  return (
    <div className="cart-item flex items-center gap-4 mb-4 pb-4">
      <div className="w-[250px]">
        <img src={item.thumbnail} alt={item.title} className="w-full" />
      </div>
      <div className="w-350 h-30 p-2">
        <h3 className="text-[var(--color_heading)] mb-2 font-bold">
          {item.title}
        </h3>
        <p className="text-[var(--p_color)] mb-4">${item.price}</p>
        <div className="flex gap-3">
          <button
            onClick={handleIncrementClick}
            className="bg-[var(--bg_color)] size-7 border-1 border-[var(--border_color)] font-bold text-[var(--color_heading)] cursor-pointer flex justify-center items-center duration-300 hover:border-[var(--main_color)]"
          >
            +
          </button>
          <p className="text-[var(--main_color)] font-bold select-none">
            {item.orderedQuantity}
          </p>
          <button
            onClick={handleDecrementClick}
            className="bg-[var(--bg_color)] size-7 border-1 border-[var(--border_color)] font-bold text-[var(--color_heading)] cursor-pointer flex justify-center items-center duration-300 hover:border-[var(--main_color)]"
          >
            –
          </button>
        </div>
      </div>
      <div onClick={handleDeleteClick}>
        <Trash className="text-[#dc3545] cursor-pointer transition duration-300 hover:scale-110" />
      </div>
    </div>
  );
}
