import { createContext, useState, useContext } from "react";
import Toast from "../components/toast/Toast";
const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false); // the state of the toast
  const [message, setMessage] = useState(""); // the message of the toast
  const [variant, setVariant] = useState(""); // the variant of the toast
  function showHideToast(msg, variant) {
    setMessage(msg);
    setVariant(variant);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2500);
  }
  return (
    <ToastContext.Provider value={{ showHideToast }}>
      <Toast msg={message} variant={variant} open={open} />
      {children}
    </ToastContext.Provider>
  );
};

// Custom Hook
// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => useContext(ToastContext);
