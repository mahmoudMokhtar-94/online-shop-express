import SkeletonProductCard from "./SkeletonProductCard";

export default function SkeletonSearchResults() {
  return (
    <div className="w-[90%] mx-auto p-10">
      <div>
        <h2 className="w-1/2 h-[31px] rect skeleton-content mb-4 mx-auto"></h2>
        <p className="w-1/2 h-[21px] rect skeleton-content mx-auto"></p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
      </div>
    </div>
  );
}
