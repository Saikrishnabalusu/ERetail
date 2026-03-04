const ResMenuShimmer = () => {
  return (
    <div className="max-w-6/12 h-full mx-auto  bg-amber-50 mt-2 flex flex-col gap-2 p-3">
      <div>
        <h1 className="text-black font-extrabold text-2xl"> </h1>
        <p className="font-medium text-lg text-neutral-400"></p>
      </div>
      <h2 className="flex items-center justify-center text-xl"></h2>
      <div className="bg-neutral-300 w-full h-12 rounded-2xl p-3">
        <input
          type="search"
          placeholder="Search menu items...."
          className="outline-none h-full w-full placeholder:text-center"
        />
      </div>
      <div className="Filter-Section flex items-center gap-2">
        <button className="filter-Btn">Veg-Btn</button>
        <button className="filter-Btn">Non-Veg-Btn</button>
        <button className="filter-Btn">Best-Seller-Btn</button>
      </div>
      <hr className="text-neutral-400 mt-2"></hr>
    </div>
  );
};

export default ResMenuShimmer;
