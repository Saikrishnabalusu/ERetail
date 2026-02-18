import React from "react";
import { useState, useEffect } from "react";
import { RESTAURANT_API } from "../utils/constants.js";
import axios from "axios";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(RESTAURANT_API);
        setRestaurants(
          response?.data.data.cards[1].card.card.gridElements.infoWithStyle
            .restaurants,
        );
      } catch {
        (error) => console.log(error);
      }

      // console.log(
      //   response?.data.data.cards[1].card.card.gridElements.infoWithStyle
      //     .restaurants,
      // );
    };
    fetchRestaurants();
  }, []);
  return restaurants;
};

export default useRestaurants;
