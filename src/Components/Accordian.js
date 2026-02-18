import { useState } from "react";
import MenuItem from "./MenuItem";

const Accordian = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  console.log("btnClicked-ShowItemStatus", showItems);
  console.log("propsDataReceivedToAccordian = ", data);

  return (
    <>
      <div className="bg-neutral-200 px-8 py-4 rounded-lg font-bold text-xl flex justify-between items-center">
        <span>{data.title}</span>
        <span className="text-xl" onClick={handleClick}>
          ⬇
        </span>
      </div>
      {showItems
        ? data.itemCards.map((c) => {
            return <MenuItem key={c.card.info.id} props={c.card.info} />;
          })
        : null}
    </>
  );
};

export default Accordian;
