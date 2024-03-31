import React from "react";
import { Link } from "react-router-dom";

const BlogBox = ({ blog }) => {
  const { id, title, body } = blog;
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title"> {title}</h2>
            <p>{body}</p>
            <div className="card-actions justify-end">
              <Link to={`/singleBlog/${id}`}>
                <button className="btn btn-primary">Open</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
