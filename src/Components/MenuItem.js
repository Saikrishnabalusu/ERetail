import React from "react";

const MenuItem = ({ props }) => {
  const imgUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${props.imageId}`;
  return (
    <div>
      <div className=" h-36 flex items-center justify-between">
        <div className="w-[70%]">
          <h2 className="text-black text-md font-black">{props.name}</h2>
          <h3 className="text-md text-neutral-700">
            Rs.{props.price ? props.price / 100 : props.defaultPrice / 100}
          </h3>
          <h3>4.3⭐(203)</h3>
          <p className="line-clamp-2 font-medium text-neutral-600 text-ellipsis">
            {props.description}
          </p>
        </div>
        <div className="w-[20%] h-full">
          <img
            src={imgUrl.replace("Image preview", "")}
            className="w-full h-full rounded-xl p-2 object-cover"
          />
        </div>
      </div>
      <hr className="text-neutral-400"></hr>
    </div>
  );
};

export default MenuItem;
