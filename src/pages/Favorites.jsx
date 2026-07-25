import { useSelector } from "react-redux";
import ProductCard from "../components/product card/ProductCard";
import PageTransition from "../components/utility-components/PageTransition";
import { Link } from "react-router-dom";
export default function Favorites() {
  const favProducts = useSelector((state) => state.favProducts.favProducts);

  return favProducts.length > 0 ? (
    <PageTransition>
      <div className="w-[90%] mx-auto py-10">
        <div className="mb-10">
          <h2 className="capitalize text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--main_color)]">
            your favorites
          </h2>

          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Here are the products you like most. Feel free to order any of them
          </p>
        </div>
        <div className="flex flex-wrap">
          {favProducts.map((favProduct) => (
            <div
              key={favProduct.id}
              className="basis-full sm:basis-1/2   md:basis-1/3   lg:basis-1/4       
        xl:basis-1/5  2xl:basis-1/6 p-3"
            >
              <ProductCard p={favProduct} />
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  ) : (
    <PageTransition>
      <div className="cart-list w-[70%] md:w-[60%] mx-auto border-[var(--border_color)] border-1 p-8 my-15 rounded-md shadow-md">
        <h2 className="cart-list-heading text-[var(--main_color)] capitalize text-[28px] font-bold pb-3 border-b border-[var(--border_color)] mb-8">
          Nothing here yet!
        </h2>

        <p className="capitalize text-[17px] text-[var(--color_heading)] tracking-wider">
          Pick you favorite products to ease your shopping process.
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
