import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleDairy = () => {
  const singleDairyData = useLoaderData();
  const { title, body } = singleDairyData;
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}!</h2>
            <p>{body}</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDairy;
