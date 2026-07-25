import TopHeader from "./components/header/TopHeader";
import BtmHeader from "./components/header/BtmHeader";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { Routes, Route } from "react-router-dom";
import CartList from "./components/cart list/CartList";
import ScrollToTop from "./components/utility-components/ScrollToTop";
/* Framer Motion Library For UI Animation */
import { AnimatePresence } from "framer-motion";
import ProductSlider from "./components/product slider/ProductSlider";
import { useLocation } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import Favorites from "./pages/Favorites";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Login from "./pages/Login";
import Footer from "./components/footer/Footer";

function App() {
  const { pathname } = useLocation();
  const currentCategory = pathname.replace("/category/", "");
  const { token, user } = useSelector((state) => state.authCredentials);

  useEffect(() => {
    if (!token) {
      localStorage.removeItem("auth-credentials");
    } else {
      localStorage.setItem("auth-credentials", JSON.stringify({ token, user }));
    }
  }, [token, user]);

  return (
    <>
      <ScrollToTop />

      <header>
        <TopHeader />
        <BtmHeader />
      </header>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productID" element={<ProductDetails />} />
          <Route path="/search" element={<SearchResults />} />
          <Route
            path="/category/:categoryName"
            element={
              <ProductSlider
                category={currentCategory}
                desc={`Browse our collection of ${currentCategory} and discover high-quality products at competitive prices.`}
              />
            }
          />
          <Route path="/cart" element={<CartList />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
