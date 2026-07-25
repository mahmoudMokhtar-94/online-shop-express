import { createContext, useState, useContext } from "react";
import Alert from "../components/alert/Alert";
const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [open, setOpen] = useState(false); // the state of the Alert
  const [title, setTitle] = useState(""); // the title of the Alert
  const [message, setMessage] = useState(""); // the message of the Alert
  const [itemToBeRemovedFromCart, setItemToBeRemovedFromCart] = useState(null);
  function showAlert(title, msg, item) {
    setTitle(title);
    setMessage(msg);
    setItemToBeRemovedFromCart(item);
    setOpen(true);
  }
  function dismissAlert() {
    setOpen(false);
  }
  return (
    <AlertContext.Provider value={{ showAlert, dismissAlert, open }}>
      <Alert
        title={title}
        message={message}
        open={open}
        showAlert={showAlert}
        dismissAlert={dismissAlert}
        itemToBeRemovedFromCart={itemToBeRemovedFromCart}
      />
      {children}
    </AlertContext.Provider>
  );
};

// Custom Hook
// eslint-disable-next-line react-refresh/only-export-components
export const useAlert = () => useContext(AlertContext);
