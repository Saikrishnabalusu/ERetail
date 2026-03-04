import React from "react";
import Header from "./Components/Header";
import Restaurants from "./pages/Restaurants";
import { Route, Routes } from "react-router";
import RestaurantMenu from "./pages/RestaurantMenu";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="w-screen h-full p-1 bg-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Restaurant/Restaurant-info/:id"
          element={<RestaurantMenu />}
        />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
      {/* // <Header />
      // <Restaurants /> */}
    </div>
  );
};

export default App;
