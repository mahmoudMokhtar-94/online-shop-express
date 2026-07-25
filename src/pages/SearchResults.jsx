import { useLocation } from "react-router-dom";
import { fetchProductsByQuery } from "../slices/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductCard from "../components/product card/ProductCard";
import SkeletonSearchResults from "../skeletons/SkeletonSearchResults";
import PageTransition from "../components/utility-components/PageTransition";
import { SearchAlert } from "lucide-react";
import { Link } from "react-router-dom";

export default function SearchResults() {
  const query = new URLSearchParams(useLocation().search).get("query");
  const dispatch = useDispatch();
  const searchResultsState = useSelector(
    (state) => state.productsOfCategory.productsOfQuery.products,
  );
  // Status of the request that fetchs product by specific query (i.e. Search Functionality)
  const queryRequestStatus = useSelector(
    (state) => state.productsOfCategory.statusofQuery,
  );
  useEffect(() => {
    if (query) {
      dispatch(fetchProductsByQuery(query));
    }
  }, [query]);

  return queryRequestStatus === "pending" ? (
    <SkeletonSearchResults />
  ) : searchResultsState.length > 0 ? (
    <PageTransition>
      <div className="w-[90%] mx-auto p-10">
        <div className="text-center">
          <h2 className="capitalize text-[var(--main_color)] text-[20px] font-bold mb-3">
            Search results for {query}{" "}
          </h2>
          <p className="text-[var(--p_color)] text-[14px]">
            {searchResultsState.length} results found
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          {searchResultsState.map((searchResultItem) => (
            <ProductCard
              className="w-[80%]"
              key={searchResultItem.id}
              p={searchResultItem}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  ) : (
    <PageTransition>
      <div className="w-[70%] md:w-[60%] mx-auto border-[var(--border_color)] border-1 p-8 my-15 rounded-md shadow-md">
        <h2 className="text-[var(--main_color)] capitalize text-[28px] font-bold pb-3 border-b border-[var(--border_color)] mb-8">
          Oops, no results match your search
        </h2>
        <div className="flex justify-center items-center">
          <SearchAlert className="size-25 text-[#dc3545]" />
        </div>

        <Link to="/">
          <button className="duration-300 bg-[var(--main_color)] text-white w-full capitalize mt-6 font-bold text-[20px] p-2 hover:bg-transparent border-2 border-[var(--main_color)] hover:text-[var(--main_color)] cursor-pointer">
            back home
          </button>
        </Link>
      </div>
    </PageTransition>
  );
}
