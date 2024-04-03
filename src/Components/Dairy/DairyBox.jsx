import React from "react";
import { Link } from "react-router-dom";

const DairyBox = ({ dairy }) => {
  const { id, title, body } = dairy;
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
            <h2 className="card-title">{title}</h2>
            <p>{body}</p>
            <div className="card-actions">
              <Link to={`/singleDairy/${id}`}>
                <button className="btn btn-primary">Open</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DairyBox;
