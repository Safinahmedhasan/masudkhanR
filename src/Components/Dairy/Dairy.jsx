import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DairyBox from "./DairyBox";

const Dairy = () => {
  const dairyData = useLoaderData();
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {showMore
          ? dairyData.map((dairy) => <DairyBox key={dairy.id} dairy={dairy} />)
          : dairyData
              .slice(0, 7)
              .map((dairy) => <DairyBox key={dairy.id} dairy={dairy} />)}
      </div>
      {!showMore && (
        <button onClick={handleShowMore} className="btn btn-primary">
          Show More
        </button>
      )}
    </div>
  );
};

export default Dairy;
