import React from "react";
import { Link } from "react-router-dom";

const DairyBox = ({ dairy }) => {
  const { id, title, body } = dairy;
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title"> {title}!</h2>
            <p>{body}</p>
            <div className="card-actions justify-end">
              <Link to={`/singleDairy/${id}`}>
                <button className="btn btn-primary">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DairyBox;
