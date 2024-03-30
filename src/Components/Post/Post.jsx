import React, { useEffect, useState } from "react";
import PostBox from "./PostBox";

const Post = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((post) => {
        const data = post.slice(0, 10);
        setPostData(data);
      });
    
  });

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {postData.map((post) => (
          <PostBox posts={post} />
        ))}
      </div>
    </div>
  );
};

export default Post;
