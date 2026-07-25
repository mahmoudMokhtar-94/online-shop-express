import { Link } from "react-router-dom";

export default function SuggestionItem({ item }) {
  return (
    <Link to={`/products/${item.id}`}>
      <li className="flex items-center gap-3 py-1 border-b border-[var(--border_color)]">
        <img className="w-[48px]" src={item.thumbnail} alt={item.title} />
        <span className="text-[var(--main_color)] truncate">{item.title}</span>
      </li>
    </Link>
  );
}
