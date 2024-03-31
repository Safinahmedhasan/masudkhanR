import React from "react";
import { Link } from "react-router-dom";

const FriendBox = ({ data }) => {
  const { id, name, email } = data;

  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{email}</p>
            <div className="card-actions justify-end">
              <Link to={`/friendDetails/${id}`}>
                <button className="btn btn-primary">Click Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendBox;
