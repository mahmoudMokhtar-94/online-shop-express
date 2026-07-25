import "./header.css";
import { Menu, ChevronDown, LogIn, UserRoundPlus } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchCategories } from "../../slices/categoriesSlice";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { logout } from "../../slices/authSlice";

const navLinks = [
  { link: "/", title: "Home", id: uuidv4() },
  { link: "/about", title: "About", id: uuidv4() },
  { link: "/accessories", title: "Accessories", id: uuidv4() },
  { link: "/blog", title: "Blog", id: uuidv4() },
  { link: "/contact", title: "Contact", id: uuidv4() },
];

function BtmHeader() {
  const categoriesState = useSelector((state) => state.categories.categories);
  const currentLocation = useLocation();
  const dispatch = useDispatch();
  const [showCategories, setShowCategories] = useState(false);
  const { pathname } = useLocation();

  const token = useSelector((state) => state.authCredentials.token);
  const isLoggedIn = !!token;

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowCategories(false);
  }, [pathname]);

  function handleBrowseCategoryClick() {
    setShowCategories(!showCategories);
  }

  function handleLogoutClick() {
    dispatch(logout());
  }

  return (
    <>
      <section className="bg-[var(--main_color)] px-4 py-2 lg:h-[60px] lg:py-0">
        <div className="btm-header-container flex-col w-[90%] mx-auto flex items-center justify-between h-fit lg:flex-row lg:h-[60px] lg:content-center">
          <nav className="flex flex-col-reverse items-center gap-2 h-full lg:flex-row lg:gap-12">
            <div className="category-nav relative w-[200px] h-full">
              <div
                className="category-btn px-2 size-full text-white flex justify-between items-center cursor-pointer"
                onClick={handleBrowseCategoryClick}
              >
                <Menu size={19} />
                <p className="capitalize select-none">browse category </p>
                <ChevronDown size={19} />
              </div>

              <div
                className={`category-nav-list z-2 bg-white absolute border-1 border-t-0 flex flex-col p-3 border-[#999] w-full top-full max-h-[400px] overflow-y-auto ${showCategories ? "active" : ""}`}
              >
                {categoriesState.map((category) => (
                  <Link
                    key={category.slug}
                    to={`category/${category.slug}`}
                    className="p-2 border-b-1 text-[14px] border-[var(--border_color)] hover:text-[var(--main_color)]"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="nav-links h-full">
              <ul className="flex flex-col justify-between items-center h-full sm:flex-row">
                {navLinks.map((navLink) => (
                  <li
                    key={navLink.id}
                    className={`px-6 h-full flex justify-center items-center ${currentLocation.pathname === navLink.link ? "active" : ""}`}
                  >
                    <Link to={navLink.link} className="text-white">
                      {navLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="sign-register-icons flex text-white mt-3 lg:mt-0">
            <div>
              <Link to="/" title="Logout" onClick={handleLogoutClick}>
                <LogIn
                  size={19}
                  className={`mr-5 duration-300 hover:rotate-360 ${isLoggedIn ? "block" : "hidden"}`}
                />
              </Link>
            </div>
            <div>
              <Link to="/login" title="Login">
                <UserRoundPlus
                  size={19}
                  className={`duration-300 hover:rotate-360 ${isLoggedIn ? "hidden" : "block"}`}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BtmHeader;
