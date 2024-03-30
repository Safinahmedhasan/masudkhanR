import React from "react";

const PostBox = (props) => {
    const { title, body } = props.posts;
    const Top = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    return (
      <div>
        <div className="container mx-auto">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{body}</p>
              <div className="my-2 card-actions justify-between">
                <button onClick={Top} className="btn btn-ghost">
                  Top
                </button>
                <button className="btn btn-primary">Open</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PostBox;
