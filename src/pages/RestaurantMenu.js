import React, { useEffect, useState } from "react";
import MenuItem from "../Components/MenuItem";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { resInfoData } from "../MockData/resData";
import Accordian from "../Components/Accordian";
import { RESTAURANTS_MENU } from "../utils/constants";
import ResMenuShimmer from "../Components/ResMenuShimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [currentRes, setCurrentRes] = useState(null);
  const [resInfoData, setResInfoData] = useState(null);

  // const resInfoUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=${id}`;
  // const resInfo = resInfoData.cards[2]?.card?.card?.info;

  const resInfoUrl = `${RESTAURANTS_MENU}${id}`;
  useEffect(() => {
    const fetchRestaurantMenu = async () => {
      const res = await axios.get(resInfoUrl);
      // console.log("dataRes =", res);
      const resInfo = res?.data.data?.cards[2]?.card?.card?.info;
      setResInfoData(res?.data.data);
      setCurrentRes(resInfo);
    };
    fetchRestaurantMenu();
  }, []);
  return currentRes ? (
    <div className="max-w-6/12  mx-auto  bg-amber-50 mt-2 flex flex-col gap-2 p-3">
      <div>
        <h1 className="text-black font-extrabold text-2xl">
          {" "}
          {currentRes?.name}
        </h1>
        <p className="font-medium text-lg text-neutral-400">
          {currentRes.locality}
        </p>
      </div>
      <h2 className="flex items-center justify-center text-xl">
        {" "}
        Restaurant Menu 🍽️{" "}
      </h2>
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

      {resInfoData ? (
        resInfoData?.cards[4].groupedCard.cardGroupMap.REGULAR.cards
          .filter(
            (c) =>
              c.card?.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
          )
          .map((c, index) => <Accordian key={index} data={c.card.card} />)
      ) : (
        <ResMenuShimmer />
      )}
      {/* <Accordian resData = {resInfoData.cards[4].groupedCard.cardGroupMap.REGULAR.cards} /> */}
      {/* <MenuItem /> */}
    </div>
  ) : (
    <ResMenuShimmer />
  );
};

export default RestaurantMenu;
