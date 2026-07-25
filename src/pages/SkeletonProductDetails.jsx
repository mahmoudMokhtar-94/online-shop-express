import "/";

function SkeletonProductDetails() {
  return (
    <div className="w-[90%] mx-auto pt-20">
      <div className="flex flex-col-reverse items-center sm:flex-row">
        <div className="w-[300px] min-h-[430px] lg:w-[430px] rect skeleton-content">
          {/* <img
            src={
              productState.images?.[selectedImageIndex] ?? productState.thumbnai
            }
            alt={productState.description}
            className="w-full"
          /> */}
        </div>
        <div className="flex-1 p-5 w-[80%]">
          <h2 className="mb-5 rect skeleton-content h-[33px]"></h2>
          <div className="icons flex rect skeleton-content h-[33px]"></div>
          <p className="my-5 rect skeleton-content h-[33px]"></p>
          <p className="my-5 rect skeleton-content h-[24px]"></p>
          <p className="my-5 rect skeleton-content h-[24px]"></p>
          <p className="my-5 rect skeleton-content h-[26px]"></p>
          <h3 className="my-5 rect skeleton-content h-[30px]"></h3>

          <button className="py-2 px-5 sm:px-6 sm:py-3 rect skeleton-content h-[49px] w-[137px]"></button>
        </div>
      </div>
      <div className="flex mt-9">
        <div className="flex gap-4 flex-wrap justify-center">
          <div className="rect skeleton-content size-[100px]"></div>
          <div className="rect skeleton-content size-[100px]"></div>
          <div className="rect skeleton-content size-[100px]"></div>
          <div className="rect skeleton-content size-[100px]"></div>
        </div>
      </div>
      <p className="mt-15">
        Slider of products belonging to the same category Was Here
        <br />
        Skeleton of Product Slider is to be shown here
      </p>
    </div>
  );
}

export default SkeletonProductDetails;
