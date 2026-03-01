import React from "react";

const Tools = () => {
  return (
    <div className="flex gap-8 mt-4">
      <div className="flex gap-4">
        <input
          placeholder="🔍 search"
          className="w-68 h-10 border-2 border-orange-500 rounded-lg p-2"
          type="text"
          onChange={(e) => {
            console.log(e.target.value, "searched");
          }}
        />

        <button
          className=" h-10 bg-orange-500 text-white rounded-lg p-2"
          onClick={() => console.log("search clicked")}
        >
          Search
        </button>
      </div>
      <button
        className="h-10 bg-orange-300 text-white font-medium p-2 rounded-xl"
        onClick={() => console.log("TopRatedRestaurants clicked")}
      >
        Top Rated Restaurants
      </button>
    </div>
  );
};

export default Tools;
