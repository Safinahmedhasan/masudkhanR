import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleDairy = () => {
  const singleDairyData = useLoaderData();
  const { title, body } = singleDairyData;
  return (
    <div>
      <div className="flex justify-center items-center my-20">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title"> {title}!</h2>
            <p>{body}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDairy;
