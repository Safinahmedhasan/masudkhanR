import React from "react";
import { useLoaderData } from "react-router-dom";
import FriendBox from "./FriendBox";

const Friends = () => {
  const friendData = useLoaderData();

  return (
    <div>
      <div>
        <div className="grid grid-cols-3 gap-10">
          {friendData.map((data) => (
            <FriendBox key={data.id} data={data}></FriendBox>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
