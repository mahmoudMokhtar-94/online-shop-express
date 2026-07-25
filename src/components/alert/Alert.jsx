import { removeFromCart } from "../../slices/cartSlice";
import { useDispatch } from "react-redux";
import { Trash, Undo } from "lucide-react";

export default function Alert({
  title,
  message,
  open,
  dismissAlert,
  itemToBeRemovedFromCart,
}) {
  const dispatch = useDispatch();

  function handleDeleteConfirm() {
    dispatch(removeFromCart(itemToBeRemovedFromCart));
    dismissAlert();
  }
  return open ? (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-50 flex items-center justify-center">
      <div className="w-[40%] mx-auto shadow-[var(--color_heading)] bg-white  p-4">
        <h2 className="text-[22px] font-bold text-[var(--main_color)] mb-2">
          {title}
        </h2>
        <p className="text-[var(--p_color)]">{message}</p>
        <div className="flex gap-4 items-center mt-3">
          <button
            onClick={handleDeleteConfirm}
            className="flex  gap-2 items-center capitalize bg-[#fee2e2] text-[#991b1b] py-2 px-4 font-bold cursor-pointer duration-300 hover:bg-[#991b1b] hover:text-[#fee2e2]"
          >
            <Trash /> <span>remove</span>
          </button>
          <button
            onClick={() => dismissAlert()}
            className="flex  gap-2 items-center capitalize bg-[#dcfce7] text-[#166534] py-2 px-4 font-bold cursor-pointer duration-300 hover:bg-[#166534] hover:text-[#dcfce7]"
          >
            <Undo /> <span>keep item</span>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
