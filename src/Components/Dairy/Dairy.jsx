import React from "react";
import { useLoaderData } from "react-router-dom";
import DairyBox from "./DairyBox";

const Dairy = () => {
  const dairyData = useLoaderData();
  const sliceDairyData = dairyData.slice(0, 7);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-5">
        {sliceDairyData.map((dairies) => (
          <DairyBox key={dairies.id} dairy={dairies} />
        ))}
      </div>
    </div>
  );
};

export default Dairy;
