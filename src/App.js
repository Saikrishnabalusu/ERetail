import React from "react";
import Header from "./Components/Header";
import Restaurants from "./pages/Restaurants";
import { Route, Routes } from "react-router";
import RestaurantInfo from "./pages/RestaurantInfo";

const App = () => {
  return (
    <div className="w-screen h-full p-1 bg-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={<Restaurants />} />
        <Route
          path="/Restaurant/Restaurant-info/:id"
          element={<RestaurantInfo />}
        />
      </Routes>
      {/* // <Header />
      // <Restaurants /> */}
    </div>
  );
};

export default App;
