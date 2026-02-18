import { RESTAURANT_API, CLOUDINARY_URL_PREFIX } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useRestaurants from "../hooks/useRestaurants.js";

const Card = ({ name, img, rating, cuisine, address, id }) => {
  return (
    <Link to={`/Restaurant/Restaurant-info/${id}`}>
      <div className="w-48 h-64 rounded-md select-none p-2">
        <img
          src={img}
          alt="restaurant-img"
          className="h-[60%] w-full rounded-t-md shadow-xl"
        />
        <h2 className="mt-1 mb-1 truncate font-semibold">{name}</h2>
        <span
          className={`p-1 rounded-md mt-2 ${rating > 4 ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
        >
          {rating}&#9733;
        </span>
        <h3 className="text-sm text-ellipsis truncate mt-2">
          {cuisine.join(", ")}
        </h3>
        <h4>{address}</h4>
      </div>
    </Link>
  );
};

const FeaturedCard = (Card) => {
  return (props) => (
    <div className="relative">
      <label className="absolute bg-amber-100 text-amber-700 text-sm font-semibold p-0.5 rounded-lg">
        Promoted
      </label>
      <Card {...props} />
    </div>
  );
};

const Restaurants = () => {
  const restaurants = useRestaurants();
  const PromotedCard = FeaturedCard(Card);

  return (
    <div className="w-full h-[90%]  items-center p-4 overflow-y-scroll">
      <h1 className="text-3xl font-bold text-gray-600 flex justify-between items-center">
        Top Restaurants
        <span className="text-amber-600 font-medium text-xl">
          LogOut in 09:00
        </span>
      </h1>

      <div className="flex items-center flex-wrap gap-4 mt-4">
        {restaurants.map((restaurant) => {
          return restaurant.info.aggregatedDiscountInfoV3 ? (
            <PromotedCard
              key={restaurant.info.id}
              name={restaurant.info.name}
              img={CLOUDINARY_URL_PREFIX + restaurant.info.cloudinaryImageId}
              rating={restaurant.info.avgRating}
              cuisine={restaurant.info.cuisines}
              address={restaurant.info.address}
              id={restaurant.info.id}
            />
          ) : (
            <Card
              key={restaurant.info.id}
              name={restaurant.info.name}
              img={CLOUDINARY_URL_PREFIX + restaurant.info.cloudinaryImageId}
              rating={restaurant.info.avgRating}
              cuisine={restaurant.info.cuisines}
              address={restaurant.info.address}
              id={restaurant.info.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Restaurants;
