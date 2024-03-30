import React from "react";

const PostBox = (props) => {
  const { title, body, id } = props.post;

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <h2>{body}</h2>
        <h2>{id}</h2>
      </div>
    </div>
  );
};

export default PostBox;
