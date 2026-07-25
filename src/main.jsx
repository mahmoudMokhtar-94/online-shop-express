import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { myStore } from "./states/myStore.js";
import { ToastProvider } from "./contexts/ToastContext.jsx";
import { AlertProvider } from "./contexts/AlertContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={myStore}>
        <ToastProvider>
          <AlertProvider>
            <App />
          </AlertProvider>
        </ToastProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
