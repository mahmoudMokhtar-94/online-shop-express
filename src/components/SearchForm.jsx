import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsByQuery } from "../slices/productsSlice";
import SuggestionItem from "./SuggestionItem";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const searchResultsState = useSelector(
    (state) => state.productsOfCategory.productsOfQuery.products,
  );
  const dispatch = useDispatch();
  let suggestions = searchTerm.trim() ? searchResultsState.slice(0, 5) : [];

  function handleSearchFormSubmit(e) {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
    setSearchTerm("");
  }

  useEffect(() => {
    dispatch(fetchProductsByQuery(searchTerm.trim()));
  }, [searchTerm]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSearchTerm("");
  }, [pathname]);

  return (
    <div>
      <form
        onSubmit={handleSearchFormSubmit}
        className="w-[360px] mx-auto p-4 flex items-center sm:w-[500px] relative"
      >
        <input
          className="border-1 border-[var(--main_color)] w-[90%] py-2 px-4 rounded-l-lg outline-none bg-[var(--bg_color)] text-[var(--color_heading)]"
          id="searchInput"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for products..."
          autoComplete="off"
        />
        <button
          type="submit"
          className="h-[42px] bg-[var(--main_color)] size-10 rounded-r-lg flex justify-center items-center cursor-pointer hover:bg-[var(--active_color)] duration-300"
        >
          <Search size={20} className="text-white" />
        </button>
      </form>
      {suggestions.length > 0 ? (
        <ul className="absolute px-2 bg-white z-2 w-[320px] left-1/2 -translate-x-1/2 shadow-lg">
          {suggestions.map((suggestionItem) => (
            <SuggestionItem key={suggestionItem.id} item={suggestionItem} />
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
