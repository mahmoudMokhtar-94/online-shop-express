import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Scroll to top to notice that you have navigated to a new URL (location)
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);
  return null;
}
