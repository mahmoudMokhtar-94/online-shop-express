import "../skeleton.css";
function SkeletonProductCard() {
  return (
    <div className="border border-[var(--border_color)] rounded-md w-[240px] mx-auto px-4 py-5 ">
      <div className="rect skeleton-content size-[206px]" />
      <h3 className="my-2 rect skeleton-content h-[27px]"></h3>
      <div className="rect skeleton-content h-[24px]"></div>
      <p className="my-4 rect skeleton-content w-[30%] h-[22px]"></p>
    </div>
  );
}

export default SkeletonProductCard;
